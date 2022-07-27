import React from 'react'
import "./nav.css"
import {ImHome} from "react-icons/im"
import {FaUserTie} from "react-icons/fa"
import {MdOutlineComputer} from "react-icons/md"
import {RiCodeBoxLine} from "react-icons/ri"
import {RiContactsBookFill} from "react-icons/ri"
import {FaLink} from "react-icons/fa"


const Nav = () => {

  return (
    <nav>
      <a href="#" className="active"><ImHome/></a>
      <a href="#about"><FaUserTie/></a>
      <a href="#skill"><MdOutlineComputer/></a>
      <a href="#project"><RiCodeBoxLine/></a>
      <a href="#contact"><RiContactsBookFill/></a>
      <a href="#footer"><FaLink/></a>
    </nav>
  )
}

export default Nav