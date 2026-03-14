import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold text-gray-900 mb-1">協裕布莊</p>
            <p className="text-sm text-gray-500">Hsiehyu Store</p>
          </div>

          <div className="flex flex-col gap-1 text-sm text-gray-500">
            <p className="font-medium text-gray-700 mb-1">聯絡資訊</p>
            <p>33442 桃園市八德區介壽路一段936號</p>
            <p>營業時間：09:00–17:00（待確認）</p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium text-gray-700 mb-1">網站連結</p>
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">首頁</Link>
            <Link href="/products" className="text-gray-500 hover:text-gray-900 transition-colors">商品</Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">關於我們</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">聯絡我們</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
          © {new Date().getFullYear()} 協裕布莊 Hsiehyu Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
