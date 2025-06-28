import React from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/navbar.jsx';
import Hero from "./components/hero.jsx";
// import gsap from '../gsapConfig.js';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
       <main>
        <Navbar />
          <Hero />
           <div className="h-dvh bg-black"></div>
       </main>
    );
};

export default App;