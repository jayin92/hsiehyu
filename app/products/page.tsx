import { getInventory } from '@/lib/notion'
import type { FabricItem, CategoryGroup } from '@/lib/notion'

export const metadata = {
  title: '商品 | 協裕布莊',
  description: '協裕布莊提供棉布、絲料、蕾絲、刺繡布、牛仔布及功能性布料。',
}

// Revalidate at most once per hour (ISR) — or remove for pure static
// export const revalidate = 3600

// ──────────────────────────────────────────────
// Stock status badge
// ──────────────────────────────────────────────
const stockBadgeClass: Record<string, string> = {
  有貨: 'bg-green-100 text-green-700',
  剩少量: 'bg-amber-100 text-amber-700',
  缺貨: 'bg-red-100 text-red-600',
}

function StockBadge({ status }: { status: string }) {
  const cls = stockBadgeClass[status] ?? 'bg-gray-100 text-gray-500'
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${cls}`}>
      {status || '—'}
    </span>
  )
}

// ──────────────────────────────────────────────
// Fabric card
// ──────────────────────────────────────────────
function FabricCard({ item }: { item: FabricItem }) {
  return (
    <div className="border border-gray-100 p-5 hover:shadow-sm transition-shadow bg-white">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
        <StockBadge status={item.stockStatus} />
      </div>

      {item.description && (
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.description}</p>
      )}

      {item.colors.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {item.colors.map((color) => (
            <span
              key={color}
              className="inline-block px-2 py-0.5 bg-gray-50 border border-gray-200 text-xs text-gray-600 rounded"
            >
              {color}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
        {item.price != null && (
          <span className="font-medium text-gray-800">
            NT${item.price.toLocaleString()} /{item.unit || '尺'}
          </span>
        )}
        {item.quantity != null && (
          <span>
            庫存：{item.quantity} {item.unit || '尺'}
          </span>
        )}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Category section (from Notion data)
// ──────────────────────────────────────────────
function CategorySection({ group }: { group: CategoryGroup }) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-light text-gray-900">{group.category}</h2>
        <div className="mt-2 w-12 h-px bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.items.map((item) => (
          <FabricCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// Fallback placeholder (no Notion data)
// ──────────────────────────────────────────────
const placeholderCategories = [
  { id: 'cotton', name: '棉布類', description: '天然棉質，透氣吸濕，適合日常服飾、居家用品製作。' },
  { id: 'silk', name: '絲料類', description: '光澤細膩，質地輕盈飄逸，適合正式服裝與高端訂製。' },
  { id: 'lace', name: '蕾絲類', description: '精緻網眼紋樣，典雅唯美，適合婚紗、禮服及裝飾。' },
  { id: 'embroidery', name: '刺繡布', description: '手工或機繡精緻花紋，立體感強，每款獨具特色。' },
  { id: 'denim', name: '牛仔布', description: '耐穿耐用的經典布料，多種磅數可選。' },
  { id: 'functional', name: '功能性布料', description: '針對特定用途設計的高機能布料。' },
]

function PlaceholderContent() {
  return (
    <div className="space-y-16">
      {placeholderCategories.map((cat) => (
        <section key={cat.id} id={cat.id}>
          <div className="mb-6">
            <h2 className="text-2xl font-light text-gray-900">{cat.name}</h2>
            <div className="mt-2 w-12 h-px bg-gray-300" />
          </div>
          <p className="text-gray-500 mb-4">{cat.description}</p>
          <div className="border border-dashed border-gray-200 p-6 text-center text-sm text-gray-400">
            商品資料載入中，請稍後…
          </div>
        </section>
      ))}
    </div>
  )
}

// ──────────────────────────────────────────────
// Page (async Server Component)
// ──────────────────────────────────────────────
export default async function Products() {
  const groups = await getInventory()
  const hasData = groups.length > 0

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Products</p>
        <h1 className="text-4xl font-light text-gray-900 mb-4">商品系列</h1>
        <p className="text-gray-500 max-w-xl">
          精選六大布料類別，涵蓋日常到專業各種需求。
          所有布料皆可依需求剪裁，歡迎來店選購或來電洽詢。
        </p>
      </div>

      {hasData ? (
        <div className="space-y-16">
          {groups.map((group) => (
            <CategorySection key={group.category} group={group} />
          ))}
        </div>
      ) : (
        <PlaceholderContent />
      )}

      <div className="mt-16 p-8 bg-gray-50 text-center">
        <p className="text-gray-600 mb-4">找不到您需要的布料？歡迎來電或親臨門市洽詢</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-gray-900 text-white text-sm hover:bg-gray-700 transition-colors"
        >
          聯絡我們
        </a>
      </div>
    </div>
  )
}
