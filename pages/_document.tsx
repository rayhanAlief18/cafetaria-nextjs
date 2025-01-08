import { Html, Head, Main, NextScript } from 'next/document'
const defaultTheme = require('tailwindcss/defaultTheme')
export default function Document() {
  return (
    <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@700&family=Poppins:wght@200&family=Roboto:wght@500&family=Fredoka:wght@300..700&family=Staatliches&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}