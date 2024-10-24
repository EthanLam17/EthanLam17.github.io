
import './Splash.css';
import portrait from '../../assets/portrait spain.jfif'
// import portrait from '../../assets/cover photo.jfif'
// import portrait from '../../assets/portrait.png'
import downicon from '../../assets/down icon.png'

const Splash = () => {

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
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
        <img src={downicon} alt="Headshot portrait of Ethan Lam"/>
        <img src={downicon} alt="Headshot portrait of Ethan Lam"/>
        <img src={downicon} alt="Headshot portrait of Ethan Lam"/>

      </div>
    </div>
  )
}


export default Splash