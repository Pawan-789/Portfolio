

 /**
  * Node module
  */
import {ReactLenis} from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */

gsap.registerPlugin(useGSAP,ScrollTrigger);

/**
  * Components
  */
import Header from "./components/Header";
import Ruan from "./components/Ruan";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import ReviewCard from "./components/ReviewCard";
import Gallery from"./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App=() =>{

  useGSAP(()=>{
    const elements =gsap.utils.toArray('.reveal-up');

    elements.forEach((element) =>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start: '-200 bottom',
          end:'bottom 80%',
          scrub:true
          
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })

    console.log(elements);
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Ruan />
        <About />
        <Skill />
        <Work />
        <ReviewCard />
        <Gallery />
        <Contact />
      </main>
      <Footer/>
      </ReactLenis>  
  )
 }

 export default App;