import '../aset/style.css'
// import '../aset/nprogress.css'
// import '../aset/nprogress.js'
import Head from "next/head"
import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar';
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNprogress
      color="#ff0015"
      startPosition={0.3}
      stopDelayMs={200}
      height="3"
      options={{parent: '#loading' }}
    />

    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
    </Head>
    <Component {...pageProps} />
    <Footer />

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    </>
  )
}

export default MyApp