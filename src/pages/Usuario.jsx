import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components/Usuarios/login/Login'
import { MenuLogin } from '../components/Usuarios/login/MenuLogin'
import "./register.css"

export const Usuario = () => {
  return (
    <section className="login_section">
        <h1 className="iniciar_session">INICIAR SESION</h1>
        <Login/>
        
            <MenuLogin/>
        
    </section>
  )
}
