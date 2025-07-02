import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

// import { useMediaQuery } from 'react-responsive'
gsap.registerPlugin(ScrollTrigger)

export const Cocktails = () => {
     React.useEffect(() => {
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('load', handleLoad);
  return () => window.removeEventListener('load', handleLoad);
}, []);
     useGSAP(() => {
          const parallaxTimeline = gsap.timeline({
               scrollTrigger: {
                    trigger: '#cocktails',
                    start: 'top 30%',
                    end: 'bottom 80%',
                    scrub: true,
               }
          })
          parallaxTimeline.from('#c-left-leaf', {
               y: 100,
               x: -100,
               // opacity: 0,
               // duration: 1,
               // ease: 'power2.out'
          })
          parallaxTimeline.from('#c-right-leaf', {
               
               y: 100,
               x: 100,
               // opacity: 0,
               // duration: 1,
               // ease: 'power2.out'
          })
       // GSAP animations or effects can be added here
     })
  return (
   <section id='cocktails' className='noisy'>
     <img src="/images/cocktail-left-leaf.png" alt="left-leaf"  id='c-left-leaf' />
     <img src="/images/cocktail-right-leaf.png" alt="right-leaf"  id='c-right-leaf' />

     <div className="list">
          <div className="popular">
               <h2>most popular cocktails</h2>
               <ul>
                    {cocktailLists.map(({name, country, detail, price}) => (
                       <li key={name}>
                         <div className="md:me-28">
                              <h3>{name}</h3>
                              <p>{country} | {detail}</p>
                         </div>
                         <span>- {price}</span>
                       </li>
                    ))}
               </ul>
          </div>
          <div className="loved">
               <h2>most loved mocktails</h2>
               <ul>
                    {mockTailLists.map(({name, country, detail, price}) => (
                       <li key={name}>
                         <div className="md:me-28">
                              <h3>{name}</h3>
                              <p>{country} | {detail}</p>
                         </div>
                         <span>- {price}</span>
                       </li>
                    ))}
               </ul>
          </div>
        
        
     </div>

   </section>
  )
}
export default Cocktails