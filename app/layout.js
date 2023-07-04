import './globals.css'
import { Roboto  } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Caliche Orozco | Landing Page',
  description: 'Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally.',
  icons: [
    {
      href: '/favicon.ico',
      rel: 'icon',
    },
    {
      href: '/favicon.ico',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
  ],

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
