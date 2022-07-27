import React from 'react'
import "./header.css"
import Typed from "react-typed"

const Header = () => {
  return (
    <header>
      <div className="container-lyrics">
        <div className="container-lyrics-1">
          <h1>Hi, I am Maira Rodriguez</h1>
            <Typed
              strings={[
                    "I`m a Front-end Developer Web Junior",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
            />
            <a href="#contact" className="buton-contact">Contact</a> 
        </div>   
      </div>

    </header>
  )
}

export default Header