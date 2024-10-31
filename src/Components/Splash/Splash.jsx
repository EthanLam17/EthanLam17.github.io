
import './Splash.css';
import portrait from '../../assets/portrait spain.jfif'
// import portrait from '../../assets/cover photo.jfif'
// import portrait from '../../assets/portrait.png'
import downicon from '../../assets/down icon.png'

const Splash = () => {

  const handleScroll = () => {
    const remainingScroll = window.innerHeight - window.scrollY

    window.scrollBy({
      top: remainingScroll,
      behavior: 'smooth'
    })
  }

  

  return (
    <div className='Splash'>
      <div className='splash-filler'></div>
      <div className='splash-content'>
        <div className='hello'>Hello! I'm,</div>
        <div className='name'>Ethan Lam</div>
        <div className='title'>Software Engineer</div>
      </div>

      <div className='portrait'>
        <img src={portrait} alt="Headshot portrait of Ethan Lam"/>
      </div>

      <div className='entice' onClick={handleScroll}>
      <i className="fa-solid fa-chevron-down"></i>
      <i className="fa-solid fa-chevron-down"></i>
      <i className="fa-solid fa-chevron-down"></i>
        {/* <img src={downicon} alt="Headshot portrait of Ethan Lam"/>
        <img src={downicon} alt="Headshot portrait of Ethan Lam"/>
        <img src={downicon} alt="Headshot portrait of Ethan Lam"/> */}

      </div>
    </div>
  )
}


export default Splash