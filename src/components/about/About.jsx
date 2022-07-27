import React from 'react'
import "./about.css"
import Cv from "./Cv"


const About = () => {
  return (
    <div id="about" className="about">
       <h2 className="lyric">About Me</h2>
       <p className="profile">I am systems enginering and tecnology in systems analysis and development,oriented
       in Front-end development and  interest ux/ui design, i have knowledge in design tools (HTML5,CSS3),bootstrap design frameworks
       programming languajes java, javascript, stack MERN, agile scrum methodologies.
       <br></br>
       <br></br>
       Self-taught with soft skills such as discipline,comunication and teamwork.Passionate about learning and training
       in new tecnologies.
       <br></br>
       <br></br>
       This with the purpose of being part of a tecnology company where i can apply my knowledge and improve my skills.
       </p>
       <Cv />
    </div>
   
  )
}

export default About