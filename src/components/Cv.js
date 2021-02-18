import React from 'react';

const Cv = () => {

    return(
        <div className="cv" id="cv">

            <h2>CURRÍCULUM Y CONOCIMIENTOS</h2>
            <span></span>

            <div className="cv-container">
                <h5>RAMÓN URCHIPIA</h5>
                <h3>FRONT-END DEVELOPER</h3>

                <h2>FORMACIÓN</h2>
                <span></span>

                <div className="cv__education">
                    <h4 >2021 - Coderhouse - Diseño UX/UI</h4>
                    <p>Trabajando con herramientas de prototipado.</p>

                    <h4>2020 - Coderhouse - Desarrollo Web Front-End</h4>
                    <p>Desarrollo Web, trabajando con HTML y CSS. Programando con JavaScript y React Js.</p>

                    <h4>2018 - Autodidacta</h4>
                    <p>Cursos online, experimentando con diferentes lenguajes y softwares.</p>
                </div>


                {/* <h2>EXPERIENCIA</h2>
                <span></span>

                <div className="cv__experience">
                    <h4>2019 - Actualidad - Freelance</h4>
                    <p>En la actualidad ofrezco mis servicios como programador web. También comparto esta actividad con el desarrollo de algunos proyectos propios.</p>
                </div> */}

                <h2>SKILLS</h2>
                <span></span>

                <div className="cv__list">
                    <h4>Lenguajes</h4>
                    <ul className="list">
                        <li>HTML / HTML5</li>
                        <li>CSS / CSS3</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                </div>

                <div className="cv__list">
                    <h4>Frameworks y Procesadores</h4>
                    <ul className="list">
                        <li>REACT</li>
                        <li>SASS</li>
                        <li>BOOTSTRAP</li>
                    </ul>
                </div>

                
                <div className="cv__list">
                    <h4>Otros</h4>
                    <ul className="list">
                        <li>GIT</li>
                        <li>GITHUB</li>
                        <li>SEO</li>
                        <li>RESPONSIVE DESIGN</li>
                        <li>FIGMA</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cv;