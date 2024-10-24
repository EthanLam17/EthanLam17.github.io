import './About.css';
import spain from '../../assets/spain cats.jfif';
import Title from '../Title/Title';

const About = () => {
  return (
    <div className="About">
      <div className="about-left">
        <div className="about-container">
          <img src={spain} />
        </div>
      </div>
      <div className="about-right">
        <div className="about-container">
          <div className="about-title">
            <div>I'm a&nbsp;</div>
            <Title />
          </div>

          <div className="about-locations">
            <i className="fa-solid fa-location-dot"></i>
            <div>Grand Rapids, MI</div>
            <div className='about-location'>
              <span className="strikethrough">Philadelphia, PA</span>
            </div>
            <div className='about-location'>
              <span className="strikethrough">New York, NY</span>
            </div>
          </div>

          <div className="about-bio">
            <div>
              My name is Ethan Lam and I’m a software engineer, cat father (not pictured), and fitness enthusiast!
            </div>
            <br></br>
            <div>
              I started my journey in 2021, building Full Stack applications. While I still get to create cool sites, I also get to tackle new challenges all the time, something I appreciate about the tech industry.  
            </div>
            <br></br>
            <div>
              From web development to integrations between third party systems, there has been no shortage to the new challenges I face. Luckily I am no stranger to learning new skills (lately I've been in the BI space, working with Microsoft Fabric and PowerBI)
            </div>
            <br></br>
            <div>
              I believe you can learn something new from everyone. If you took this time to read about me, please reach out, I’d love to get to know you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
