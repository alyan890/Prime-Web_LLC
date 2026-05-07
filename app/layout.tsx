import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'DevStudio — Premium Web Development',
  description: 'Custom WordPress, Next.js, Node.js development — DevStudio.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative">
          <div className="aurora" aria-hidden />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
