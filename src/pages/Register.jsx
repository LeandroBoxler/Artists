import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { DataUser } from '../components/Usuarios/register/DataUser'
import { SelectUserType } from '../components/Usuarios/register/SelectUserType'
import { Passwords } from '../components/Usuarios/register/Passwords'

export const Register = () => {
  return (
    <main>
    <section className="login_section">
        <h1 className="iniciar_session">Registrate</h1>
        <form action="/users/log" className="login_form" method="POST">
        <DataUser/>
        <SelectUserType/>
        <Passwords/>
        <div>
        <input type="checkbox" name="terminos" id="terminos" value=""/>
        <label for="">acepto terminos y condiciones</label>
        </div>
        <div>
            <button className="login_boton">INICIAR SESION</button>
            
        </div>
        </form>
        <Link to="/user/login">Volver</Link>
    </section>
</main>
)
}
