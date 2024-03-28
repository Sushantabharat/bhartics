import Header from '@/components/header/Header'

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex-grow container mx-auto px-4">
      <Header />
      {children}
      <footer className="text-center text-gray-500 dark:text-gray-400">
        footer
      </footer>
    </main>
  )
}
