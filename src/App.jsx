
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Hero from "./landing";
import About from "./About";
import Services from "./services";
import Projects from "./projects";
import Notfound from './notfound';
import './Footer'
import Footer from './Footer';
   function App() {
    return(
      <>
      <Router>
        <Routes>
          <Route path = "/" element={<Layout/>} />
          <Route path='/about' element={<About/>} />
          <Route  path ='/hero' element={<Hero/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/notfound' element={<Notfound/>}/>
          </Routes>
      </Router>
      </>
    )
   }

export default App
