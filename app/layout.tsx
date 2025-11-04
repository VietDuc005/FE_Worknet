import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ClientWrapper from '@/components/ClientWrapper'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'WorkNet - Project Management Platform',
  description: 'Modern project management platform for teams',
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.className} antialiased min-h-screen transition-colors duration-300 
        bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  )
}
