import { useState } from 'react';

import './Carousel.css';

const Carousel = ({ sourceArray }) => {
  const [main, setMain] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(null)
  const [inView, setInView] = useState(0)

  const handleNext = () => {
    if (main !== sourceArray.length - 1) {
      setMain(main + 1);
    } else {
      setMain(0)
    }
  };
  const handlePrev = () => {
    if (main !== 0) {
      setMain(main - 1);
    } else {
      setMain(sourceArray.length - 1)
    }
  };



  const handleClick = (idx) => {
    switch (idx) {
      case main - 1:
        setVisibleDescription(null)
        handlePrev();
        break;
      case main + 1:
        setVisibleDescription(null)
        handleNext();
        break;
      default:
        setVisibleDescription(visibleDescription === null ? idx : null)
        break;
    }
  };
  

  return (
    <div className="Carousel">
      <div 
      className='carousel-inner'
      style= {{ transform: `translateX(calc(-${main * 50}vw + 50vw - 25vw))` }}
      >
        {sourceArray.map((item, idx) => (
          <div className={`carousel-item 
          ${main === idx ? 'active': ''}
          ${visibleDescription === idx ? 'display': ''}
          `} onClick={() => handleClick(idx)}>
            <div className='carousel-item-title'>
              {item.title}
            </div>

            <div className={`carousel-item-description
              ${visibleDescription === idx ? 'display': ''}
            `}>
              {item.description}
            </div>
            <img src={item.source}/>

          </div>
        ))}
      </div>
      
      {/* <div className='carousel-controls'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div> */}

    </div>
  );
};

export default Carousel;
