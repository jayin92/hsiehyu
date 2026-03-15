export const metadata = {
  title: '關於我們 | 協裕布莊',
  description: '了解協裕布莊的故事，三十年專注布料的專業與熱情。',
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">About Us</p>
        <h1 className="text-4xl font-light text-gray-900">關於我們</h1>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-xl font-light text-gray-900 mb-6 pb-4 border-b border-gray-100">
            我們的故事
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              協裕布莊位於桃園市八德區，多年來專注於提供優質布料，
              服務無數裁縫師傅、服裝設計師及手作愛好者。
            </p>
            <p>
              我們深信每一匹布料背後都有其獨特的故事，從棉花田到成品、
              從蠶絲到絲綢，每個環節都需要用心對待。
            </p>
            <p>
              多年的專業積累，讓我們能夠為客戶提供精準的選布建議，
              無論是日常服飾、特殊訂製還是創意手作，我們都能找到最合適的材料。
            </p>
            <p>
              我們致力於保持最完整的布料庫存，定期引進新款布料，
              讓每一位客人都能在協裕找到心目中的理想素材。
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-light text-gray-900 mb-6 pb-4 border-b border-gray-100">
            我們的承諾
          </h2>
          <div className="space-y-6">
            {[
              {
                title: '品質保證',
                desc: '每批布料嚴格把關，確保材質符合標示規格，讓您安心購買。',
              },
              {
                title: '專業建議',
                desc: '資深選布師傅親自為您解說，根據用途推薦最適合的布料。',
              },
              {
                title: '多元選擇',
                desc: '六大類別，數十款以上品項，從基礎到進階，一站滿足所有需求。',
              },
              {
                title: '親切服務',
                desc: '用心對待每一位客人，小量散布到大批採購，同樣用心服務。',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 bg-gray-200 self-stretch shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google Reviews */}
      <section className="mb-20">
        <h2 className="text-xl font-light text-gray-900 mb-8 pb-4 border-b border-gray-100">
          顧客評價
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50">
          <div className="text-center">
            <p className="text-5xl font-light text-gray-900">4.5</p>
            <div className="flex gap-0.5 my-2 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i <= 4 ? 'text-amber-400' : 'text-amber-200'} fill-current`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-400">28 則評論</p>
          </div>
          <div className="flex-1 md:border-l md:border-gray-200 md:pl-6">
            <p className="text-gray-600 leading-relaxed italic">
              「種類齊全，老闆很親切，會耐心解說各種布料的特性，
              推薦給需要選布的朋友！」
            </p>
            <p className="text-xs text-gray-400 mt-2">— Google 評論摘錄</p>
          </div>
          <a
            href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 border border-gray-300 text-sm text-gray-700 hover:border-gray-500 transition-colors whitespace-nowrap"
          >
            查看所有評論 →
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <h2 className="text-xl font-light text-gray-900 mb-8 pb-4 border-b border-gray-100">
          門市位置
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">地址</p>
            <p className="text-gray-900 text-lg mb-2">33442 桃園市八德區介壽路一段936號</p>
            <a
              href="https://maps.app.goo.gl/vR3FCvDGJCaFfcCg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              在 Google Maps 中開啟
            </a>
          </div>

          {/* Map */}
          <div className="aspect-[4/3] bg-gray-50 border border-gray-100 overflow-hidden">
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
      </section>
    </div>
  )
}
