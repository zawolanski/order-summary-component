import './globals.css'
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'

const red_Hat_Display = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Order Summary',
  description: 'Here is your order summary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${red_Hat_Display.className} bg-page bg-page-mobile bg-top bg-contain bg-repeat-x lg:bg-page-desktop min-h-screen flex justify-center items-center`}>{children}</body>
    </html>
  )
}
