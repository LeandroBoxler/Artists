import { Link } from "react-router-dom"
import "./header.css"
import { useState } from "react"

export const Sidebar = () => {
const [menu,setMenu]=useState()


const handleClose = () => setMenu(false);
const handleShow = () => setMenu(true);


  return (
   
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--ul" >
          
          <li><Link to="/"><i id="logo" class="fa-solid fa-camera-retro"></i></Link></li>
          <li><i  onClick={cl} id="bars" className="fa-solid fa-bars"></i></li>
          
          <li><Link to="/user/login"><i id="login" className="fa-solid fa-user"></i></Link></li>
        </ul>
      </nav>
    </header>

  )
}
