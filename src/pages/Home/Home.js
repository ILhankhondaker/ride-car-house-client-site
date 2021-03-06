import React from 'react';
import { Helmet } from 'react-helmet-async';
import slide1 from '../../images/slide1.jpg'
import Agends from '../Agends/Agends';
import Blogs from '../Blogs/Blogs';
import Counts from '../Counts/Counts';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='md:h-96 h-72' style={{ backgroundImage: `url(${slide1})`, backgroundPosition: "center" }}>
        <Helmet title="Home | Ride Car-House Inventory"></Helmet>
        <div className='container mx-auto banner-content pt-16 md:pt-24'>
          <p className='text-black md:text-4xl text-2xl uppercase'>The All New</p>
          <h2 className='text-sky-500 md:text-6xl text-5xl uppercase py-2'>Mazda-mx5</h2>
          <h2 className='md:text-4xl text-2xl text-amber-400 uppercase'>Stylish & Mordern</h2>
        </div>
      </div>

      <div className='container mx-auto my-20'>
        <InventoryItems></InventoryItems>
      </div>

      <div className='container mx-auto my-20'>
        <Agends></Agends>
      </div>

      <Counts></Counts>
      <div className="container mx-auto my-20">
        <Blogs></Blogs>
      </div>
    </>


  );
};

export default Home;