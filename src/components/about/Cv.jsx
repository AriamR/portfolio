import React from 'react'
import CV from "../../assets/cv.pdf"

const Cv = () => {
  return (
    <div className='cv'>
        <a href={CV} download className='buton-contact'>Download CV</a>
    </div>
  )
}

export default Cv