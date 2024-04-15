
import { Outlet } from "react-router-dom";
import { Sidebar } from '../components/Sidebar'

import './App.css'
import { Footer } from "../components/Footer";
function App() {
 

  return (
    <>
  <Sidebar/>
 <Outlet/>

<Footer/>
    </>
  )
}

export default App
