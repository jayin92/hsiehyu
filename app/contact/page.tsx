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
              <a href="tel:03-361-3073">03-361-3073</a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">營業時間</p>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700 py-2 border-b border-gray-100">
                <span>週一 ─ 週五</span>
                <span className="font-medium">09:00 – 20:00</span>
              </div>
              <div className="flex justify-between text-gray-700 py-2 border-b border-gray-100">
                <span>週六</span>
                <span className="font-medium">09:00 – 17:00</span>
              </div>
              <div className="flex justify-between text-gray-400 py-2 border-b border-gray-100">
                <span>週日</span>
                <span>公休</span>
              </div>
            </div>
          </div>
        </div>

        {/* Line QR + Map */}
        <div className="space-y-10">
          {/* Line QR */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Line 聯絡</p>
            <a
              href="https://line.me/R/ti/p/@909bwihx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-[#06C755] text-white rounded-lg hover:bg-[#05b34d] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.921 1.458 5.527 3.742 7.242l-.822 3.073a.3.3 0 00.44.333l3.397-1.993A11.08 11.08 0 0012 20.484c5.523 0 10-4.144 10-9.241C22 6.145 17.523 2 12 2zm-3.5 12.5h-1.25A.25.25 0 017 14.25v-4.5A.25.25 0 017.25 9.5H8.5a.25.25 0 01.25.25v4.5a.25.25 0 01-.25.25zm2.25 0h-1.25a.25.25 0 01-.25-.25v-2.5l-1.5-2.1a.25.25 0 01.2-.4H9.2a.25.25 0 01.2.1l.85 1.19.85-1.19a.25.25 0 01.2-.1h1.25a.25.25 0 01.2.4l-1.5 2.1v2.5a.25.25 0 01-.25.25zm5.5 0H15a.25.25 0 01-.25-.25v-1.75H13.5v1.75a.25.25 0 01-.25.25H12a.25.25 0 01-.25-.25v-4.5A.25.25 0 0112 9.5h1.25a.25.25 0 01.25.25V11h1.25V9.75a.25.25 0 01.25-.25H16.25a.25.25 0 01.25.25v4.5a.25.25 0 01-.25.25z"/>
              </svg>
              加入 LINE 好友
            </a>
            <p className="text-sm text-gray-400 mt-3">ID：@909bwihx</p>
            <p className="text-sm text-gray-500 mt-1">加入後可直接詢問商品或預約來店</p>
          </div>

          {/* Map */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">地圖</p>
            <div className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=33442+桃園市八德區介壽路一段936號&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="協裕布莊地圖"
              />
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
