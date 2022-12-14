import React from 'react'
import "./project.css"
import IMG1 from "../../assets/calculator.png"
import IMG2 from "../../assets/landing.jpg"
import IMG3 from "../../assets/weather.jpg"

//matriz de datos
const data = [
  {
    id:1,
    image: IMG1,
    title:"Calculator Website",
    github: "",
    demo:"https://ProyectoBootcamp.maira8.repl.co",
    description:"Website created with html, css, javascript with calculator with classic features"

  },
  {
    id:2,
    image: IMG2,
    title:"LandingPage",
    github: "https://github.com/AriamR/LandingPage.git",
    demo:"https://applandingpagereact.herokuapp.com/",
    description:"User interface creation project and interaction, use of react-router v6."

  },{
    id:3,
    image: IMG3,
    title:"WeatherApp",
    github: "https://github.com/AriamR/weatherApp",
    demo:"https://weatherapplicationreact.herokuapp.com/",
    description:"weather application which uses a third-party api to display weather data by date and location of a city anywhere in the world made with reactjs."

  },{
    id:4,
    image: IMG3,
    title:"Portfolio",
    github: "https://github.com/AriamR/weatherApp",
    demo:"https://reactportfolio-maira.herokuapp.com/",
    description:"weather application which uses a third-party api to display weather data by date and location of a city anywhere in the world made with reactjs."

  },{
    id:5,
    image: IMG3,
    title:"WeatherApp",
    github: "https://github.com/AriamR/weatherApp",
    demo:"https://weatherapplicationreact.herokuapp.com/",
    description:"weather application which uses a third-party api to display weather data by date and location of a city anywhere in the world made with reactjs."

  }
  
]

const Project = () => {
  
  return (
    <div id="project" className="portfolio-p">
      <h3 className='project-ly'>Proyects</h3>
        <div className="contentItem">
        {
          data.map(({id,image,title,github,demo,description}) =>{
            return(
              <article key={id}className="article">
                <div className="portfolio_img">
                  <figure>
                    <img className="portfolio-images" src={image} alt={DataTransferItemList}/>
                      <div className="items-description"> 
                        <h4 className='card-title'>{title}</h4>
                        <p className="card-p">{description}</p>
                      </div>
                  </figure>  
                </div>
                <a className="enlace" href={github} target="_blank" rel="noopener noreferrer">Github</a>
                <a className="enlace" href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project

/*{
  id:4,
  image: IMG3,
  title:"Portfolio",
  github: "https://github.com/AriamR/weatherApp",
  demo:"https://weatherapplicationreact.herokuapp.com/",
  description:"weather application which uses a third-party api to display weather data by date and location of a city anywhere in the world made with reactjs."

},
{
  id:5,
  image: IMG3,
  title:"Portfolio",
  github: "https://github.com/AriamR/weatherApp",
  demo:"https://weatherapplicationreact.herokuapp.com/",
  description:"weather application which uses a third-party api to display weather data by date and location of a city anywhere in the world made with reactjs."

}*/