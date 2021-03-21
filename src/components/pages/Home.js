import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import PersBrandStatement from '../PBS'
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
  return (
    <div>
      <HeroSection />
      <PersBrandStatement />
      <Cards />
      <Footer />
    </div>
  )
};

export default Home;
