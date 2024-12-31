import React from 'react'

const Cv = () => {

    return (
        <div className='cv' id='cv'>

            <h2>CURRÍCULUM Y CONOCIMIENTOS</h2>
            <span></span>

            <div className='cv-container'>
                <h5>RAMÓN URCHIPIA</h5>
                <h3>FRONT-END DEVELOPER</h3>

                <h2>EXPERIENCIA</h2>
                <span></span>

                <div className='cv__experience'>
                    <h4>2022 - Actualmente | Accenture</h4>
                    <h4>Front End Development Sr Analyst</h4>
                    <p>Maquetación y desarrollo de componentes para eCommerce en VTEX IO.</p>
                </div>

                <div className='cv__experience'>
                    <h4>2021 - 2022 | Glamit</h4>
                    <h4>Front-end Developer</h4>
                    <p>Maquetación y desarrollo de componentes para eCommerce en VTEX IO.</p>
                </div>

                <div className='cv__experience'>
                    <h4>2019 - 2021 - Freelance</h4>
                    <h4>Front-end Developer</h4>
                    <p>Servicios como desarrollador web. Sitios institucionales y desarrollo de algunos proyectos propios.</p>
                </div>

                <h2>FORMACIÓN</h2>
                <span></span>

                <div className='cv__education'>
                    <h4 >WordPress</h4>
                    <h4 >2021 - Coderhouse</h4>
                    <p>Trabajando con WooCommerce, plugins y herramientas.</p>

                    <h4>Desarrollo Web Front-End</h4>
                    <h4>2020 - Coderhouse</h4>
                    <p>Desarrollo Web, trabajando con HTML y CSS. Programando con JavaScript y React Js.</p>

                    <h4>2018 - Autodidacta</h4>
                    <p>Cursos online, experimentando con diferentes lenguajes y softwares.</p>
                </div>

                <h2>SKILLS</h2>
                <span></span>

                <div className='cv__list'>
                    <h4>Lenguajes</h4>
                    <ul className='list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>
                </div>

                <div className='cv__list'>
                    <h4>Frameworks y Procesadores</h4>
                    <ul className='list'>
                        <li>Vtex IO</li>
                        <li>React Js</li>
                        <li>Vue Js</li>
                        <li>Sass</li>
                    </ul>
                </div>


                <div className='cv__list'>
                    <h4>Otros</h4>
                    <ul className='list'>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>WordPress</li>
                        <li>WooCommerce</li>
                        <li>SEO</li>
                        <li>Responsive Design</li>
                        <li>Figma</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cv