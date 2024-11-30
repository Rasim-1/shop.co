import React from 'react';
import Hero from '../components/Hero/Hero';
import Brand from '../components/brands/Brand';
import Category from '../components/category/Category';
import Browse from '../components/browse/Browse';
import Happy from '../components/Happy/Happy';
import Stays from '../components/Stays/Stays';

const Home = () => {
  return (
    <>
     
      <Hero />
      <Brand/>
      <Category/>
      <Browse/>
      <Happy/>
      <Stays/>
    
    </>
  );
};

export default Home;
