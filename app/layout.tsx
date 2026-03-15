import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '協裕布莊 Hsiehyu Store',
  description: '桃園市八德區協裕布莊，電話 03-361-3073，提供棉布、絲料、蕾絲、刺繡布、牛仔布及功能性布料。週一至週六 09:00–17:00，歡迎親臨選購。',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '協裕布莊 Hsiehyu Store',
    description: '桃園市八德區協裕布莊，專業布料行。電話 03-361-3073。',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
