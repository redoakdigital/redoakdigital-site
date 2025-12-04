import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Red Oak Digital',
  description: 'Technology research firm accelerating innovation'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
