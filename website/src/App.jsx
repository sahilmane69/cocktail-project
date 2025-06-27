import React from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import Navbar from './components/navbar.jsx';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
       <main>
        <Navbar />
       </main>
    );
};

export default App;