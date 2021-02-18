import React, { useContext } from "react";
import { ProviderContext } from '../context/Context';

const Proyects = () => {

    const { proyects, languages } = useContext(ProviderContext)

    return(
        <div className="section-container" id="proyects">
            <h2>PROYECTOS</h2>
            <span></span>
            <p>Algunos proyectos que desarrolle hasta ahora</p>

            <div className="languages-icons">
                {languages.map((icon, i) => {
                    return(
                        <i key={i} className={icon.icon}></i>
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
