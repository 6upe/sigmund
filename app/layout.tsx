import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Scripts } from '@/components/layout/Scripts'

// Import third-party CSS here
import '../public/css/bootstrap.min.css'
import '../public/lib/animate/animate.min.css'
import '../public/lib/owlcarousel/assets/owl.carousel.min.css'
import '../public/css/style.css'

export const metadata: Metadata = {
  title: 'Sigmund Trust School - Learners of Today, Leaders of Tomorrow',
  description:
    "Raising tomorrow's leaders through excellent education and innovation.",
  keywords: [
    'Sigmund Trust School',
    'Primary Education',
    'STEAM',
    'Leadership',
  ],
  authors: [{ name: 'Sigmund Trust School' }],
  openGraph: {
    title: 'Sigmund Trust School',
    description:
      "Where learning meets innovation and values shape character.",
    url: 'https://sigmund.pikozm.com',
    siteName: 'Sigmund Trust School',
    images: [
      {
        url: '/img/logo.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
