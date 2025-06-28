
import navlinks from '../../constants/index.js'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '.navbar',
        start: 'bottom top',
      }
    }, );
    navTween.fromTo('.navbar',{ backgroundColor : 'transparent'},{
        backgroundColor : '#00000050',
        backdropFilter: "blur(10px)",
        duration:1,
        ease:'power1.inOut'
    });
  })
  return (
      <nav className=" navbar fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
            <p>Velvet Pour</p>
          </a>

          <ul className="flex gap-8 text-white font-medium">
            {navlinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="hover:text-purple-400 transition-colors duration-300">
                    {link.title}
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </nav>

  )
}
export default Navbar