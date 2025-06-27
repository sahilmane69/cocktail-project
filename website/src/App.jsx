import React from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <div className='flex-center h-[100vh] '>
            <h1 className="text-3xl text-indigo-300">hello gsap</h1>
        </div>
    );
};

export default App;