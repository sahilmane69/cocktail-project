import React from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/navbar.jsx';
import Hero from "./components/hero.jsx";
import { Cocktails } from "./components/Cocktails.jsx";
import About from "./components/about.jsx";
import Art from "./components/art.jsx";
// import Menu from "./components/menu.jsx";
// import gsap from '../gsapConfig.js';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
        <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
          {/* <Menu /> */}
       </main>
    );
};

export default App;