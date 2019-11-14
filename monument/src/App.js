import React from 'react';
import Navbar from './components/Navbar/Navbar'
// import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Landing /> */}
      <Footer />
      <Blog />
    </div>
  );
}

export default App;
