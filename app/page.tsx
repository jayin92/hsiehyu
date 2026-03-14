import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Hsiehyu Store
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
            協裕布莊
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
            三十年匠心，每一匹布料都是品質的承諾。
            <br />
            專業布料選品，為您的每個創作提供最佳素材。
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-700 transition-colors"
            >
              瀏覽商品
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm tracking-wide hover:border-gray-500 transition-colors"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="w-full aspect-[16/7] bg-gray-50 border border-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-300">
            <div className="w-16 h-16 mx-auto mb-3 border-2 border-dashed border-gray-200 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">主視覺圖片（待上傳）</p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-light text-gray-900 mb-10">精選布料類別</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: '棉布類', desc: '透氣舒適，日常首選' },
            { name: '絲料類', desc: '光澤細膩，質感出眾' },
            { name: '蕾絲類', desc: '精緻紋樣，典雅風格' },
            { name: '刺繡布', desc: '手工刺繡，獨特細節' },
            { name: '牛仔布', desc: '耐穿耐用，百搭經典' },
            { name: '功能性布料', desc: '防水防風，專業需求' },
          ].map((item) => (
            <Link
              key={item.name}
              href="/products"
              className="group p-6 border border-gray-100 hover:border-gray-300 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-50 mb-4 group-hover:bg-gray-100 transition-colors" />
              <p className="font-medium text-gray-900 mb-1">{item.name}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Business Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-10">營業資訊</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">地址</p>
              <p className="text-gray-700 leading-relaxed">
                桃園市八德區<br />
                陸光街50巷1-1號
              </p>
              <a
                href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900"
              >
                Google Maps →
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">營業時間</p>
              <p className="text-gray-700">週一至週六</p>
              <p className="text-gray-900 font-medium">09:00 – 17:00</p>
              <p className="text-xs text-gray-400 mt-1">＊時間待確認，請來電洽詢</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">顧客評價</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light text-gray-900">4.5</span>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400">28 則評論</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900"
              >
                查看 Google 評論 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
