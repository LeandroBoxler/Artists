import { Link } from "react-router-dom";
import "./home.css";
import { NamePerfil } from "../components/home/NamePerfil";
import { ButtomsImage } from "../components/home/ButtomsImage";

export const Home = () => {


  return (
<main className="main_index">
    <section className="index_section">

    <article className="index_article">
    <NamePerfil/>
    
    <div className="index_article-img">
        
        <img src="/images/tree-736885_1280.jpg" alt=""/>
    <ButtomsImage/>

    
    </div>
  </article>


      <article className="index_article">
        <div className="index_article-perfil">
            <img className="index_article-imgPerfil" src="/images/pngaaa.com-749150.png" alt=""/>
            <p>Emiliano Boxler</p>
        </div>  
        <div className="index_article-img">
            
            <img src="/images/tree-736885_1280.jpg" alt=""/>
        <div className="index_article-icons"> 
            <i className="fa-solid fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-solid fa-arrow-down"></i>
        </div>
        </div>
      </article>
      <article className="index_article">
        <div className="index_article-perfil">
            <img className="index_article-imgPerfil" src="/images/pngaaa.com-749150.png" alt=""/>
            <p>Emiliano Boxler</p>
        </div>  
        <div className="index_article-img">
            
            <img src="/images/tree-736885_1280.jpg" alt=""/>
        <div className="index_article-icons"> 
            <i className="fa-solid fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-solid fa-arrow-down"></i>
        </div>
        </div>
      </article>

    </section>
  </main>  )
}
