
import './SplashRevised.css';
import portrait from '../../assets/portrait spain.jfif'
// import portrait from '../../assets/cover photo.jfif'
// import portrait from '../../assets/portrait.png'
import downicon from '../../assets/down icon.png'

const Splash = () => {

  const handleScroll = () => {
    console.log(window.innerHeight)
    console.log(window.scrollY)
    const remainingScroll = window.innerHeight - window.scrollY

    window.scrollBy({
      top: remainingScroll,
      behavior: 'smooth'
    })
  }

  

  return (
    <div className='SplashRevised'>
      {/* <div className='header'>  
        <div>EL</div>
        <div className='navigate'>
          <div>About Me</div>
          <div>Projects</div>
          <div>Contact Me</div>
        </div>
      </div> */}
      <div className='splash-container'>
          
        <div className='containers'>
          <img src={portrait} alt="Headshot portrait of Ethan Lam"/>
        </div>
        {/* <div className='splash-content'>
          <div className='hello'>Hello! I'm,</div>
          <div className='name'>Ethan Lam</div>
          <div className='title'>Software Engineer</div>
        </div> */}
        <div className='containers'>
          Hello! I'm Ethan Lam
        </div>


        {/* <div className='entice' onClick={handleScroll}>
        <i className="fa-solid fa-chevron-down"></i>
        <i className="fa-solid fa-chevron-down"></i>
        <i className="fa-solid fa-chevron-down"></i>
        </div> */}
      </div>

    </div>
  )
}


export default Splash