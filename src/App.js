// src/App.js
import React from 'react';
import Hero from './Components/Hero.js';
import About from "./Components/About.js";
import Services from './Components/Services.js';
import Footer from './Components/Footer';

// import Gallery from './Components';
import './App.css';

 const App = () => {
//   const galleryImages = [
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//   ];

  return (
    <>
    <Hero/>
    <About/>
    <Services/>
       
    </>
    // <div className="app">
      // <Hero />
      // <About/>
      //   {/* <h1>About Us</h1>
      //   <p>Welcome to our hotel portfolio website where we offer the best accommodations.</p> */}
      
      // {/* <section id="gallery">
    //     <h1>Gallery</h1>
    //     <Gallery images={galleryImages} />
    //   </section>
    //   <Footer />
    // </div>
  // ); */}
)};
export default App;
