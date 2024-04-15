import React from 'react'
import { Link } from 'react-router-dom'

export const MenuLogin = () => {
  return (
    <>
    <div class="login_help">
    <p>¿quieres registrarte?</p> <Link to="/user/register">registrar</Link>
</div>
    <Link to="">¿olvidaste tu contraseña?</Link>
    </>
)
}
