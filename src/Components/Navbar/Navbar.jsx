import './Navbar.css'

import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'

const Navbar = ({sectionRefs}) => {

  const [showModal, setShowModal] = useState(false)
    const handleScroll = (section) => {
      console.log(sectionRefs[section])
      sectionRefs[section].current.scrollIntoView({behavior: 'smooth'})
    }

    const [defaultEffect, setDefaultEffect] = useState("")


    useEffect(() => {
      const interval = setInterval(() => {
        setDefaultEffect('default-design-on')
        setTimeout(() => {
          setDefaultEffect('')
        }, 2000)
      }, 4000)
  
      return () => clearInterval(interval)
    }, [])
  

  return (
    <div className='Navbar'>
      <div className='name'>
        Ethan Lam
      </div>
      <div className='navigation'>
        <div onClick={() => handleScroll('Splash')}>Home</div>
        <div onClick={() => handleScroll("About")}>About</div>
        <div onClick={() => handleScroll("Projects")}>Projects</div>
        {/* <div onClick={() => handleScroll("Contact")}>Contact</div> */}
      </div>

      <div className='contact' onClick={() => setShowModal(true)}>
        <div className='button-container'>
            <i class="fa-solid fa-comments"></i>
        </div>
        <div className={`contact-design ${defaultEffect}`}
          onMouseEnter={() => setDefaultEffect('')}
        ></div>
      </div>

      {showModal && sectionRefs['Portfolio'].current && createPortal(
        <Modal onClose={() => setShowModal(false)}/>,
        sectionRefs['Portfolio'].current
      )}
      {/* <div className='contact-modal'>
        <div>

        </div>
      </div> */}
    </div>
  )
}



export default Navbar