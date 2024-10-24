import { useEffect, useState } from 'react'
import './Title.css'

const Title = () => {
  const titles = [
    'Software Engineer',
    'Application Developer',
    'Problem Solver'
  ]

  const [titleIndex, setTitleIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('fade-in')

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out')
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        setFadeClass('fade-in')
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className={`current-title ${fadeClass}`}>
        {titles[titleIndex]}
      </div>
    </div>
  )
}

export default Title