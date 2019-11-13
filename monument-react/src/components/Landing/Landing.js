import React from 'react';
import Header from './Header/Header';
import Archive from './Archive/Archive';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

function Landing() {
  return (
    <div className="App">
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default Landing;
