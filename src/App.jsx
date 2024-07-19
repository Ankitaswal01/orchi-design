import Navbar from "./component/navbar"
import './App.css'
import Landingpage from "./component/landingpage"
import Marquee from "./component/marquee"
import About from "./component/about"
import Eyes from "./component/eyes"
import Feature from "./component/feature"
import Cards from "./component/cards"
import Footer from "./component/footer"
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white"> 
        <Navbar className=" ">Navbar</Navbar>
        <Landingpage/>
        <Marquee/>
        <About/>
        <Eyes></Eyes>
        <Feature/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
