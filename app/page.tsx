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
            六十年匠心，每一匹布料都是品質的承諾。
            <br />
            專業布料選品，為您的每個創作提供最佳素材。
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-700 transition-colors"
            >
              聯絡我們
            </Link>
            <a
              href="https://line.me/R/ti/p/@909bwihx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#06C755] text-white text-sm tracking-wide hover:bg-[#05b34d] transition-colors"
            >
              LINE 詢問布料
            </a>
          </div>
        </div>
      </section>

      {/* Hero Fabric Display */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="w-full aspect-[16/7] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.png"
            alt="協裕布莊精選布料"
            className="w-full h-full object-cover"
          />
          {/* Overlay with contact info */}
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <div className="p-8 text-white">
              <p className="text-sm tracking-[0.2em] text-gray-200 mb-1 uppercase">Hsiehyu Store</p>
              <p className="text-lg font-light mb-2">精選布料，歡迎親臨選購</p>
              <a href="tel:03-361-3073" className="text-2xl font-medium tracking-widest hover:text-gray-300 transition-colors">
                03-361-3073
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-2">想了解布料種類？</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              我們提供多種棉布、絲料、蕾絲、刺繡布、牛仔布及功能性布料。<br />
              歡迎直接透過 LINE 客服詢問，我們將為您提供專業建議。
            </p>
          </div>
          <a
            href="https://line.me/R/ti/p/@909bwihx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] text-white text-sm tracking-wide hover:bg-[#05b34d] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            加入 LINE 客服
          </a>
        </div>
      </section>

      {/* Business Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-10">營業資訊</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">地址</p>
              <p className="text-gray-700 leading-relaxed">
                33442 桃園市八德區<br />
                介壽路一段936號
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
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">電話</p>
              <a href="tel:03-361-3073" className="text-gray-900 font-medium hover:underline">03-361-3073</a>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">營業時間</p>
              <p className="text-gray-700">週一 ─ 週五</p>
              <p className="text-gray-900 font-medium">09:00 – 20:00</p>
              <p className="text-gray-700 mt-1">週六</p>
              <p className="text-gray-900 font-medium">09:00 – 17:00</p>
              <p className="text-xs text-gray-400 mt-1">週日公休</p>
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
