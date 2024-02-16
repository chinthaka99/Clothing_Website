import React from 'react'
 import Hero from '../components/hero/Hero';
 import Popular from '../components/popular/popular';
import Navbar from '../components/navbar/Navbar';
import Offers from '../components/offers/offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../components/footer/Footer';


const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop;
