import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Project from "./components/project/Project"
import Skill from "./components/skill/Skill"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App