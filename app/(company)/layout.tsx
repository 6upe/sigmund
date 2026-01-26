import type { Metadata } from 'next'
import Header from '@/components/main_layout/Header'
import Footer from '@/components/main_layout/Footer'
import { Scripts } from '@/components/main_layout/Scripts'

// import '../public/css/bootstrap.min.css'
// import '../public/lib/animate/animate.min.css'
// import '../public/lib/owlcarousel/assets/owl.carousel.min.css'
// import '../public/css/style.css'

import '@/app/styles/css/bootstrap.min.css'
import '@/app/styles/lib/animate/animate.min.css'
import '@/app/styles/lib/owlcarousel/assets/owl.carousel.min.css'
import '@/app/styles/css/style.css'


export const metadata: Metadata = {
  title: 'Sigmund Company Limited | Education, Innovation & Professional Services',
  description:
    'Sigmund Company Limited is a diversified organization delivering education, consultancy, training, and institutional support services.',
  keywords: [
    'Sigmund Company Limited',
    'Education Services',
    'Consultancy',
    'Training',
    'Institutional Development',
    'Zambia',
  ],
  authors: [{ name: 'Sigmund Company Limited' }],
  openGraph: {
    title: 'Sigmund Company Limited',
    description:
      'A forward-looking company delivering education, consultancy, and professional services.',
    url: 'https://sigmund.pikozm.com',
    siteName: 'Sigmund Company Limited',
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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
