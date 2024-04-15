
import { Outlet } from "react-router-dom";
import { Sidebar } from '../components/Sidebar'

import './App.css'
function App() {
 

  return (
    <>
  <Sidebar/>
 <Outlet/>


    </>
  )
}

export default App
