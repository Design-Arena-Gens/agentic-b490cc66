import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'App Brochure - Revolutionary Application Suite',
  description: 'Discover the power of our innovative application platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
