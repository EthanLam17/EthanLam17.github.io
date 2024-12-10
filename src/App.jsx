import React, {useRef} from 'react';

import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Splash from './Components/Splash/Splash';
import SplashRevised from './Components/SplashRevised/SplashRevised'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';


import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'
import challengeu from './assets/challengeu2.png'
import connect from './assets/connect1.png'
import datalake from './assets/datalake1.png'
import fleet from './assets/fleet1.png'


function App() {

  const portfolioRef = useRef(null);
  const splashRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    Portfolio: portfolioRef,
    Splash: splashRef,
    About: aboutRef,
    Projects: projectsRef,
    Contact: contactRef,
  };


  return (
    <div id="portfolio" className='playfair-display-font' ref={portfolioRef}>
      {/* <div className="header">
        <div className="name">Ethan Lam</div>
        <div className="nav" >
          <div>About Me</div>
          <div>Skills</div>
          <div>Experiences</div>
        </div>
      </div> */}
      <Navbar sectionRefs={sectionRefs}/>


      <div className="body">

        <div className='' ref={splashRef}>
          {/* <Splash /> */}
          <SplashRevised />
        </div>

        <div className="values" ref={aboutRef}>
          <About />
        </div>



        <div className="projects" ref={projectsRef}>
          <Carousel 
            sourceArray={[
              {
                title: "Challenge Connect",
                technologies: "",
                source: connect,            
                description: "what is it: Challenge Connect is Challenge Mfg's customized intranet web page.\nhow does it help: Challenge Connect provides a centralized location to important applications, resources, documents, and company wide events."
              },
              {
                title: "Challenge Data Lakehouse",
                technologies: "",
                source: datalake,               
                description: "Human Resource Information Systems (HRIS), Enterprise Resource Planning (ERP), Ticketing Systems and Applicant Tracking Systems. Stakeholders across every department within Challenge Manufacturing was consuming more and more data everyday. What were the chances that different teams were pulling the same information from these core systems? High."
              },
              {
                title: "Challenge Fleet Management",
                technologies: "",
                source: fleet,
                description: "what is it: The Fleet Management application modernizes the vehicle check-out process, replacing outdated paper methods with an organized web platform. \nhow does it help: Featuring Microsoft Single Sign-On, it enables corporate employees to reserve vehicles seamlessly, report issues to management, and maintain efficient oversight"
              },
              {
                title: "Challenge University",
                technologies: "",
                source: challengeu,
                description: "what is it: Challenge University is a redesigned learning management system for Challenge Manufacturing, built using Cornerstone's APIs. How does it help: This custom web page integrates seamlessly with Cornerstone’s servers, allowing users to view personalized training information and notifications while providing a tailored and engaging learning experience"
              }
            ]}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
