import React, { useState } from "react";

const Proyects = () => {

    const [proyects, setProyects] = useState([
        {name: 'Retro Games', 
        url: 'https://retrogames-ru.netlify.app/', 
        img: 'img/retrogames.jpg', 
        languages: 'REACT, SASS, FIREBASE',
        code: 'https://github.com/r-vudama/proyectoEC'},
        {name: 'Carrito de compras', 
        url: 'https://carrito-epi.netlify.app/', 
        img: 'img/carrito.jpg', 
        languages: 'HTML, SASS, JS, JSON',
        code: 'https://github.com/r-urchi/carrito-de-compras'},
        {name: 'Vudama', 
        url: 'https://vudama.netlify.app/', 
        img: 'img/vudama.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/Vudama'},
        {name: 'Estudio Jurídico', 
        url: 'https://www.estudiodiazbarcia.com/', 
        img: 'img/estudio.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/Estudio-DB'},
        {name: 'Estudio SML', 
        url: 'https://sml-abogados.com/', 
        img: 'img/sml.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/SML'},
        {name: 'Fotografía', 
        url: 'https://ramonurchipiaph.netlify.app/', 
        img: 'img/fotografia.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/Fotografia'},
        {name: 'Piedra, papel o tijera', 
        url: 'https://ppt-urchi.netlify.app/', 
        img: 'img/ppt.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/PPT'},
        {name: 'Mi Portfolio', 
        url: 'https://ramon-urchipia.netlify.app/', 
        img: 'img/portfolio.jpg', 
        languages: 'HTML, SASS, JS',
        code: 'https://github.com/r-urchi/Portfolio'}
    ])

    const [languages, setLanguages] = useState([
        {icon: 'fab fa-html5'},
        {icon: 'fab fa-css3-alt'},
        {icon: 'fab fa-sass'},
        {icon: 'fab fa-js'},
        {icon: 'fab fa-react'}
    ])

    return(
        <div className="section-container" id="proyects">
            <h2>PROYECTOS</h2>
            <span></span>
            <p>Algunas webs que desarrolle hasta ahora</p>

            <div className="languages-icons">
                {languages.map((icon, i) => {
                    return(
                        <i key={i} class={icon.icon}></i>
                    )
                })}
            </div>

            <div className="proyects-container">
                {proyects.map((proyect, i) => {
                    return(
                        <div key={i} className="proyect">
                            <a href={proyect.url} target="_blank">
                                <img src={proyect.img} alt=""/>
                            </a>
                            <p>{proyect.languages}</p>
                            <a target="_blank" href={proyect.url}>{proyect.name}</a>
                            <a  target="_blank" href={proyect.code}>Ver código</a>
                        </div>
                        )
                    })}
            </div>
        </div>
    )

}

export default Proyects;
