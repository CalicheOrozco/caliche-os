import './globals.css'
import { Roboto  } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Caliche Orozco | Landing Page',
  description: 'Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally.',
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.ico',
    },
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icon.ico" />
      <link rel="icon" href="/icon.ico" />
      <link rel="apple-touch-icon" href="/icon.ico" />
      <link
        rel="apple-touch-icon-precomposed"
        href="/icon.ico"
      />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
