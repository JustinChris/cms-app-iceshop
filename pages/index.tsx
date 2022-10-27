import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AboutUs from '../Components/AboutUs/AboutUs';
import Desc from '../Components/Desc/Desc';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ice Cream Shop</title>
      </Head>

      <Header />

      <AboutUs />
      
      <Desc />
      
      <Footer></Footer>
    </>
  )
}

export default Home
