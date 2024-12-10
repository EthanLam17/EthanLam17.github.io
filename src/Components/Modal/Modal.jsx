import { createPortal } from 'react-dom';
import { useState } from 'react';

import './Modal.css';

const Modal = ({ onClose }) => {

  const handleFormClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div className="Modal" onClick={onClose}>
      
      <div className="form-container" onClick={handleFormClick}>
          <div className='form-header'>
            <div>Lets connect!</div>
            <button onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <form
            method="POST"
            action="https://formsubmit.co/ethanlam0@yahoo.com"
          >
            <div className="form-questions">
              <input type="hidden" name="_subject" value="Portfolio Website Response" />
              <div className="">
                <input
                  className='form-input'
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div >
                <input
                  className="form-input"
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Your company"
                  
                />
              </div>
              <div >
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div >
                <textarea
                  className="form-input"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className='form-submit'>
                <input type="submit" value="Send" />
            </div>
          </form>
        </div>

    </div>
  );
};

export default Modal;
