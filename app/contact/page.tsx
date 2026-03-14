export const metadata = {
  title: '聯絡我們 | 協裕布莊',
  description: '歡迎聯絡協裕布莊，地址、電話及 Line 聯絡方式。',
}

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Contact</p>
        <h1 className="text-4xl font-light text-gray-900 mb-4">聯絡我們</h1>
        <p className="text-gray-500">
          歡迎親臨門市選購，或透過以下方式與我們聯繫。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Contact Info */}
        <div className="space-y-10">
          {/* Address */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">門市地址</p>
            <p className="text-xl text-gray-900 mb-2">33442 桃園市八德區介壽路一段936號</p>
            <a
              href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              在 Google Maps 中查看
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">電話</p>
            <p className="text-xl text-gray-900">
              （待補充）
            </p>
            <p className="text-sm text-gray-400 mt-1">請親臨門市或查詢 Google Maps 頁面取得電話</p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">營業時間</p>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700 py-2 border-b border-gray-100">
                <span>週一至週六</span>
                <span className="font-medium">09:00 – 17:00</span>
              </div>
              <div className="flex justify-between text-gray-400 py-2 border-b border-gray-100">
                <span>週日</span>
                <span>休息</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">＊以上時間待確認，請來電洽詢</p>
          </div>
        </div>

        {/* Line QR + Map */}
        <div className="space-y-10">
          {/* Line QR */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Line 聯絡</p>
            <div className="w-40 h-40 bg-gray-50 border border-gray-100 flex flex-col items-center justify-center gap-2">
              <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <p className="text-xs text-gray-300 text-center px-2">Line QR Code<br/>（待上傳）</p>
            </div>
            <p className="text-sm text-gray-500 mt-3">掃描 QR Code 加入 Line 好友</p>
          </div>

          {/* Map */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">地圖</p>
            <div className="aspect-square bg-gray-50 border border-gray-100 flex flex-col items-center justify-center gap-2">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs text-gray-300">互動地圖</p>
              <a
                href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 underline underline-offset-1 hover:text-gray-600 transition-colors"
              >
                開啟 Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="p-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-light text-gray-900 mb-3">歡迎親臨選購</h2>
        <p className="text-gray-500 mb-6">
          門市現貨豐富，歡迎您親臨感受各種布料的質感與色彩。
        </p>
        <a
          href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-700 transition-colors"
        >
          查看門市位置
        </a>
      </div>
    </div>
  )
}
