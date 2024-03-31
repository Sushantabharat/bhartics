import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'bhartics new car',
  description: 'Buy new car of all brands',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-sky-50 flex flex-col">
          {children}
          <footer className="text-center text-gray-500 dark:text-gray-400">
            footer
          </footer>
        </div>
      </body>
    </html>
  )
}
