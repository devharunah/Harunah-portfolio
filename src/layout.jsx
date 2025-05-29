import "./global.css";
import Hero from "./landing";
import About from "./About";
import ServicesGrid from "./services";
import Projects from "./projects";
import Footer from "./Footer";
import HeroSection from "./test";
import Herotst from "./test"
import Freqently from "./Frequnently"
   function Layout() {
    return(
      <>
   <Hero/>
   <About/>
     <ServicesGrid/>
     <Projects/>
        <Freqently/>
      <Footer/>  


      </>
    )
   }

export default Layout
