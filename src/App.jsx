import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Splash from './Components/Splash/Splash';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer';


import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'

function App() {
  return (
    <div id="portfolio">
      {/* <div className="header">
        <div className="name">Ethan Lam</div>
        <div className="nav" >
          <div>About Me</div>
          <div>Skills</div>
          <div>Experiences</div>
        </div>
      </div> */}

      <div className="body">

        <div className='section'>
          <Splash />
        </div>

        <div className="section values">
          <About />
        </div>

        {/* <div className="section experience">

          <div>What Ethan has worked with before</div>
          <div>React</div>
          <div>JavaScript</div>
          <div>HTML/CSS</div>
          <div>Python</div>
          <div>Azure</div>
          <div></div>
        </div> */}

        <div className="section skills">
        {/* <div>What Ethan's accomplished</div>
          <div>Datalake</div>
          <div>Web Dev</div>
          <div>Integrations</div>
          <div>Dashboards</div> */}




        </div>
        <div className="section projects">
          <Carousel 
            sourceArray={[
              {
                title: "Challenge Connect",
                technologies: "",
                source: one,            
                description: ""
              },
              {
                title: "Challenge Data Lakehouse",
                technologies: "",
                source: two,               
                description: ""
              },
              {
                title: "Challenge Fleet Management",
                technologies: "",
                source: three,
                description: ""
              },
              {
                title: "Challenge University",
                technologies: "",
                source: four,
                description: ""
              }
            ]}
          />
        </div>
      </div>

      <div className='section'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
