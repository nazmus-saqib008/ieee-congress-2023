import "./App.css";
import Hero from "./Components/Hero";
import Details from "./Components/Details";
import Schedule from "./Components/Schedule";
import Event from './Components/Event';
import Venue from "./Components/Venue";
import Footer from "./Components/Footer";
import Sponsor from "./Components/Sponsor";
import Speaker from "./Components/Speaker";
import ieee_logo from "./Assets/ieee_logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function App() {
  // const handleSetActive = (to) => {
  //   console.log(to);
  // };
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Header/>
      <Hero/>
      <Details/>
      <Schedule/>
      <Contact/>
      <Footer/> */}
      {/* <div
        id="header"
        className="w-full bg-slate-500 h-12 text-xl flex flex-row justify-end fixed z-20"
      >
        <img
          src={ieee_logo}
          alt="IEEE"
          className="mr-auto mix-blend-multiply"
        />
        <ul className="flex flex-col md:flex-row gap-x-3 md:gap-x-10 my-auto mr-10 text-white text-sm md:text-lg">
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              // onSetActive={handleSetActive}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="schedule"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              // onSetActive={handleSetActive}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="venue"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              // onSetActive={handleSetActive}
            >
              Venue
            </Link>
          </li>
        </ul>
      </div> */}

      <nav className="fixed flex flex-row w-full min-h-fit sm:px-0 font-Raleway text-xl drop-shadow-[0_4px_23px_rgba(0,0,0,0.9)] bg-slate-500 z-50">
        <div className="flex flex-row sm:py-0 justify-center sm:justify-normal sm:pl-8 w-full min-h-fit items-center bg-slate-500 gap-44">
          <img
            src={ieee_logo}
            alt="logo"
            height={50}
            width={70}
            className="inline"
          />
          <span className="inline sm:hidden">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={28}
              color="#ffffff"
            />
          </span>
        </div>

        <div
          className={`links w-full sm:pl-0 pl-9 pr-4 sm:pb-0 pb-4 absolute sm:static flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-16 sm:z-10 transition-all duration-500 bg-slate-500 ease-in -z-10 ${
            open
              ? "top-[4.5rem] opacity-100"
              : "top-[-14rem] sm:opacity-100 opacity-0"
          }`}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white pt-4 sm:pt-0 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="schedule"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            Schedule
          </Link>
          <Link
            to="events"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            Event
          </Link>
          <Link
            to="speaker"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            Speakers
          </Link>
          <Link
            to="sponsor"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            Sponsors
          </Link>
          <Link
            to="venue"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            activeClass="active"
            className="links text-white cursor-pointer"
          >
            Venue
          </Link>
        </div>
      </nav>

      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <Details />
      </Element>
      <Element name="schedule">
        <Schedule />
      </Element>
      <Element name="events">
        <Event/>
      </Element>
      <Element name="speaker">
        <Speaker />
      </Element>
      <Element name="sponsor">
        <Sponsor />
      </Element>
      <Element name="venue">
        <Venue />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;
