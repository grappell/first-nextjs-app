import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../componets/Navbar'
import Footer from '../componets/footer'

function MyApp({ Component, pageProps }) {
  return (
      <><Navbar /><Component {...pageProps} /><Footer /></>
  )
}

export default MyApp
