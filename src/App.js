import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
import Hero from './Components/Hero';
import Details from './Components/Details';
import Schedule from './Components/Schedule';
import Venue from './Components/Venue';
import Footer from './Components/Footer';
import ieee_logo from './Assets/ieee_logo.png';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function App() {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
      {/* <Header/>
      <Hero/>
      <Details/>
      <Schedule/>
      <Contact/>
      <Footer/> */}
      <div id='header' className='w-full bg-slate-500 h-12 text-xl flex felx-row justify-end fixed z-20'>
        <img src={ieee_logo} alt="IEEE" className='mr-auto'/>
        <ul className='flex gap-x-10 my-auto mr-10 text-white'>
          <li>

            <Link 
              activeClass="active" 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500} 
              // onSetActive={handleSetActive}
              >Home</Link>
          </li>
          <li>

            <Link 
              activeClass="active" 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              // onSetActive={handleSetActive}
            >About</Link>
          </li>
          <li>

            <Link 
              activeClass="active" 
              to="schedule" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              // onSetActive={handleSetActive}
            >Schedule</Link>
          </li>
          <li>

            <Link 
              activeClass="active" 
              to="venue" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              // onSetActive={handleSetActive}
            >Venue</Link>
          </li>
        </ul>

      </div>
      <Element name="hero">
        <Hero/>
      </Element>
      <Element name="about">
        <Details/>
      </Element>
      <Element name="schedule">
        <Schedule/>
      </Element>
      <Element name="venue">
        <Venue/>
      </Element>
      <Element name="footer">
        <Footer/>
      </Element>
    </>
  );
}

export default App;
