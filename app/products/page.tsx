import Link from 'next/link'

export const metadata = {
  title: '布料詢問 | 協裕布莊',
  description: '想了解協裕布莊的布料種類與庫存？歡迎透過 LINE 客服直接詢問。',
}

export default function Products() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Fabric Inquiry</p>
        <h1 className="text-4xl font-light text-gray-900 mb-4">布料種類詢問</h1>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          協裕布莊提供多樣化的布料選擇，包含棉布、絲料、蕾絲、刺繡布、牛仔布及功能性布料等。
          如需了解詳細種類、顏色、價格或庫存，歡迎透過 LINE 客服直接詢問，我們將提供專業建議。
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 gap-8">
        <div className="w-20 h-20 rounded-full bg-[#06C755] flex items-center justify-center">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-3">需要詢問布料種類？</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            請直接加入我們的 LINE 官方帳號，<br />
            我們將盡快為您回覆，提供最即時的布料資訊。
          </p>
          <a
            href="https://line.me/R/ti/p/@909bwihx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white text-base tracking-wide hover:bg-[#05b34d] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            加入 LINE 客服詢問
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-4">LINE ID：@909bwihx</p>
      </div>

      <div className="border-t border-gray-100 pt-10 text-center">
        <p className="text-gray-500 text-sm mb-4">也歡迎直接來電或親臨門市</p>
        <div className="flex justify-center gap-6">
          <a href="tel:03-361-3073" className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-2">
            03-361-3073
          </a>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2">
            查看完整聯絡資訊 →
          </Link>
        </div>
      </div>
    </div>
  )
}
