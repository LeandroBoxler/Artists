
export const Login = () => {
  return (
    <form action="/users/log" className="login_form" method="POST">
    <input className="login_user" type="text" placeholder="usuario" name="user"/>

    <input className="login_user" type="password" placeholder="constraseña" name="password"/>
    
    <button className="login_boton">INICIAR SESION</button>
</form>
 )
}
