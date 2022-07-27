import React from 'react'
import "./skill.css"
import SkillReact from "../../assets/svg/science.png";
import SkillJs from "../../assets/svg/js.png";
import SkillFigma from "../../assets/svg/figma.png";
import SkillGithub from "../../assets/svg/github.png";
import SkillNode from "../../assets/svg/nodejs.png";
import Slider from "react-slick";

const skills =  [
  {
    id:1,
    title:"React",
    image: SkillReact,
    level:"intermediate"
  },
  {
    id:2,
    title:"Javascript",
    image: SkillJs,
    level:"intermediate"
},{
    id:3,
    title:"Figma",
    image:SkillFigma,
    level:"intermediate"
},{
    id:4,
    title:"Github",
    image:SkillGithub,
    level:"Basic"
},{
    id:5,
    title:"Node JS",
    image:SkillNode,
    level:"intermediate"
}
]



const Skill = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2000,
      centerMode:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return  (
    <div id="skill">
      <h2>Skills</h2>
      
      <Slider {...settings} className='skill-tool'>
          {skills.map(({id,image,title,level}) =>{
            return(
              <div key={id} className = 'skill-tool-div'>
                <h4>{title}</h4>
                 <img className="skill-tools" src={image} alt=""/>
                 <h4>{level}</h4>
                </div>
            )
          })}
      
          
      </Slider> 
   
    </div>
  )
  
}

export default Skill