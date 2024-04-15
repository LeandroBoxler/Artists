import { Link } from "react-router-dom"
import "./header.css"
export const Sidebar = () => {
  return (
   
    <header class="header">
      <nav class="header__nav">
        <ul class="header__nav--ul" >
          
          <li><a href="/">Mas visto</a></li>
          <li><a href="">Search</a></li>
          
          <Link to="/user/login"><i class="fa-solid fa-user"></i></Link>
        </ul>
      </nav>
    </header>

  )
}
