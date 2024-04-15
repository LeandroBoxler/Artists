import React from 'react'

export const Perfil = () => {
  return (
    <main class="main_perfil">
    <section class="seccion-datos-perfil">
        <div class="imagenes-perfil">
            <img class="foto-portada" src="/images/user/portada.jpg" alt=""/>
            <img class="foto-perfil" src="/images/user/fotoPerfil.jpg" alt=""/>
        </div>
        <article class="descripcion-name-perfil">
            <h3 class="nombre-perfil">NOMBRE PERFIL</h3>
            <button class="boton-seguir-perfil">SEGUIR</button>
            <div class="datos-perfil">
                <div class="dato-perfil">
                    <i class="fa-regular fa-envelope"></i>
                    <p>correo@gmail.com</p>
                </div>
                <div class="dato-perfil">
                    <i class="fa-regular fa-envelope"></i>
                    <p>correo@gmail.com</p>
                </div>
                <div class="dato-perfil">
                    <i class="fa-regular fa-envelope"></i>
                    <p>correo@gmail.com</p>
                </div>
            </div>

            <p class="descripcion-perfil">dasjdklasjdsadasfdasjflksdhfñkjasdhgjkasdhgñkjadskgsladjhfasdjklfhalksdfhladskgflhsdgfhlsdagfvlkjsdahflkjasdhfjkasdfhlkjasdfhlsdakjfhlkjsdafhlkjasdfhksljadfhkljasdhflksdajfhklasjdalskjdsjdadskdansndksanaskdasndasknasnkadsnasknasknasdjkaskjdansdjkasdkasdnk</p>
        </article>
    </section>
    <section class="seccion-img-perfil">
        <div>
        <ul  class="categoria-fotos-perfil">
            <li>Uiltimos trabajas</li>
            <li>Mejores</li>
            <li>Todos</li>
        </ul>
        </div>
        <div class="imagenes-perfil">
            <img class="imagen-perfil" src="/images/flores.jpg" alt=""/>
            <img class="imagen-perfil" src="/images/tree-736885_1280.jpg" alt=""/>
            <img class="imagen-perfil" src="/images/portada.jpg" alt=""/>
            <img class="imagen-perfil" src="/images/4k-hd-wallpaper-for-computer-desktop-with-dark-aesthetic-and-dope-trippy-wallpapers-for-cute-girls-photo.jpg" alt=""/>
        </div>

    </section>
</main>

    )
}
