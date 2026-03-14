export const metadata = {
  title: '商品 | 協裕布莊',
  description: '協裕布莊提供棉布、絲料、蕾絲、刺繡布、牛仔布及功能性布料。',
}

const categories = [
  {
    id: 'cotton',
    name: '棉布類',
    description: '天然棉質，透氣吸濕，適合日常服飾、居家用品製作。觸感柔軟舒適，是最受歡迎的基礎布料選擇。',
    items: ['純棉平織', '純棉斜紋', '棉麻混紡', '水洗棉', '雙層紗'],
  },
  {
    id: 'silk',
    name: '絲料類',
    description: '光澤細膩，質地輕盈飄逸，適合正式服裝與高端訂製。垂墜感佳，展現優雅氣質。',
    items: ['真絲雪紡', '桑蠶絲', '人造絲緞', '喬其紗', '電力紡'],
  },
  {
    id: 'lace',
    name: '蕾絲類',
    description: '精緻網眼紋樣，典雅唯美。適合婚紗、禮服及服裝局部裝飾，增添浪漫細節。',
    items: ['法式蕾絲', '彈力蕾絲', '刺繡蕾絲', '網格蕾絲', '威尼斯蕾絲'],
  },
  {
    id: 'embroidery',
    name: '刺繡布',
    description: '手工或機繡精緻花紋，立體感強，每款皆獨具特色。適合服飾、家飾及特殊訂製需求。',
    items: ['亮片刺繡', '絲線刺繡', '立體花刺繡', '幾何刺繡', '民族風刺繡'],
  },
  {
    id: 'denim',
    name: '牛仔布',
    description: '耐穿耐用的經典布料，百搭不過時。多種磅數可選，從輕薄到厚實，滿足不同需求。',
    items: ['輕磅牛仔（6oz）', '中磅牛仔（10oz）', '重磅牛仔（14oz）', '彈力牛仔', '水洗做舊牛仔'],
  },
  {
    id: 'functional',
    name: '功能性布料',
    description: '針對特定用途設計的高機能布料，結合技術與舒適。適合戶外運動、工作服及特殊應用場合。',
    items: ['防水布（TPU）', 'Gore-Tex 類似材質', '排汗快乾布', '防風布', 'UV 抗紫外線布'],
  },
]

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 flex flex-col items-center justify-center">
      <svg className="w-8 h-8 text-gray-200 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-xs text-gray-300">{label}</p>
    </div>
  )
}

export default function Products() {
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

      <div className="space-y-20">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="flex flex-col md:flex-row gap-10">
              {/* Image */}
              <div className="md:w-2/5 shrink-0">
                <PlaceholderImage label={`${cat.name}示意圖（待上傳）`} />
              </div>

              {/* Info */}
              <div className="flex-1 py-2">
                <h2 className="text-2xl font-light text-gray-900 mb-4">{cat.name}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.description}</p>

                <div>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">常見品項</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1 h-1 bg-gray-300 rounded-full inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100" />
          </section>
        ))}
      </div>

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
