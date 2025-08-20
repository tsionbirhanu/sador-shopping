// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter, Playfair_Display } from 'next/font/google';

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair',
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: 'Sador Fashion Store - Style Meets Expectation',
//   description: 'Sador Shopping & Fashion is your go-to online store for trendy, high-quality clothing and unique gift items. From stylish outfits to elegant perfumes, bags, and accessories.',
//   keywords: 'fashion, clothing, perfumes, bags, accessories, Ethiopia, online shopping, luxury, style',
//   authors: [{ name: 'Sador Fashion Store' }],
//   openGraph: {
//     title: 'Sador Fashion Store - Style Meets Expectation',
//     description: 'Discover trendy, high-quality clothing and unique gift items at Sador Fashion Store.',
//     type: 'website',
//     locale: 'en_US',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Sador Fashion Store - Style Meets Expectation',
//     description: 'Discover trendy, high-quality clothing and unique gift items at Sador Fashion Store.',
//   },
//   viewport: 'width=device-width, initial-scale=1',
//   themeColor: '#d4af37',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta name="format-detection" content="telephone=no" />
//       </head>
//       <body className={`${inter.className} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }



import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Sador Fashion Store - Style Meets Expectation",
  description:
    "Premium fashion store offering trendy, high-quality clothing and unique gift items. From stylish outfits to elegant perfumes, bags, and accessories.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
