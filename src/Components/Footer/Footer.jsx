import './Footer.css'
import resume from '../../assets/Resume Ethan Lam.pdf'

const Footer = () => {


  return (
    <div className="Footer">
      <div className='identity'>
        <div className='copyright'>
          <i className="fa-regular fa-copyright"></i>
          <div>Ethan Lam</div>
        </div>
        <div>ethanlam0@yahoo.com</div>
      </div>


      <div className='links'>
        <a className="icons" href='https://github.com/EthanLam17' target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="icons" href='https://github.com/EthanLam17' target='blank'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a className="icons" href={resume} download>
          <i className="fa-solid fa-file-arrow-down"></i>
        </a>
      </div>


    </div>
  )
}


export default Footer