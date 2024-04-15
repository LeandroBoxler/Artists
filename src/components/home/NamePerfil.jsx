import React from 'react'
import { Link } from "react-router-dom";

export const NamePerfil = () => {
  return (
    <div className="index_article-perfil">
    <img className="index_article-imgPerfil" src="/images/pngaaa.com-749150.png" alt=""/>
    <Link to="/user/Perfil"><p>Emiliano Boxler</p></Link>
</div>  
  )
}
