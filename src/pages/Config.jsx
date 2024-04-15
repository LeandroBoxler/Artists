import React from 'react'

export const Config = () => {
  return (
    <main>
    <h1 className="iniciar_session">Configuraciones</h1>

    <section className="login_section">
        <article>
        <div>
            <h3>Usuario</h3>
            <p>Nombre</p>
            <p>Apellido</p>
            <p>correo@gmail.com</p>

        </div>      
        <div>
            <h3>Guardados</h3>
            <p>Imagenes guardadas</p>
            <p>Notificaciones</p>
            <p>Usuarios seguidos</p>
        </div>
        <div>
            <h3>Seguridad</h3>
            <p>Cabmbiar datos personales</p>
            <p>Cambiar contraseña</p>
            <p>correo@gmail.com</p>
            
        </div>      
        <div>
            <h3>Reportar Bug</h3>
            <p>Si encontro un bug avisenos</p>
        </div>      
                
                    <li>Guardados</li>
                    <li>Usuario</li>
                    <li>Seguridad</li>
                    <li>Contactanos</li>
                    <li>Reportar Bug</li>
        </article>
        </section>
</main> 
  )
}
