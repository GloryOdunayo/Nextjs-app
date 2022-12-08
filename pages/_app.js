import Footer from '../components/footer'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<>
      <Component {...pageProps} />
    </>)
  } else{
    return( <>
      <Head>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
    )
  }
}

export default MyApp
