import React, { useState } from "react";

const Proyects = () => {

    const [proyects, setProyects] = useState([
        {name: 'Vudama', url: 'https://vudama.netlify.app/', img: 'img/vudama.jpg', code: 'https://github.com/r-urchi/Vudama'},
        {name: 'Estudio Jurídico', url: 'https://www.estudiodiazbarcia.com/', img: 'img/estudio.jpg', code: 'https://github.com/r-urchi/Estudio-DB'},
        {name: 'Carrito de compras', url: 'https://carrito-epi.netlify.app/', img: 'img/carrito.jpg', code: 'https://github.com/r-urchi/carrito-de-compras'},
        {name: 'Estudio SML', url: 'https://sml-abogados.com/', img: 'img/sml.jpg', code: 'https://github.com/r-urchi/SML'},
        {name: 'Fotografía', url: 'https://ramonurchipiaph.netlify.app/', img: 'img/fotografia.jpg', code: 'https://github.com/r-urchi/Fotografia'},
        {name: 'Piedra, papel o tijera', url: 'https://ppt-urchi.netlify.app/', img: 'img/ppt.jpg', code: 'https://github.com/r-urchi/PPT'},
        {name: 'Mi Portfolio', url: 'https://ramon-urchipia.netlify.app/', img: 'img/portfolio.jpg', code: 'https://github.com/r-urchi/Portfolio'}
    ])

    return(
        <div className="section-container">
            <h2>PROYECTOS</h2>
            <span></span>
            <p>Algunas webs que desarrolle hasta ahora</p>

            <div className="proyects-container">

                {proyects.map((proyect, i) => {
                    return(
                        <div key={i} className="proyect">
                            <a href={proyect.url} target="_blank">
                            <img src={proyect.img} alt=""/></a>
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
