import React, { useContext } from 'react'
import { ProviderContext } from '../context/Context'
import type { Languages } from '../context/Context'

const Cv = () => {

    const { languages } = useContext(ProviderContext)

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
                    <h4>2022 - Actualmente | Infracommerce LATAM</h4>
                    <h4>Front-end Developer</h4>
                    <p>Maquetación y desarrollo de componentes para eCommerce en VTEX IO.</p>
                </div>

                <div className='cv__experience'>
                    <h4>2022 | Accenture</h4>
                    <h4>Front-End Development Sr Analyst</h4>
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

                    <h4>Técnico Superior en Programación</h4>
                    <h4>2024 - 2026 - Teclab</h4>
                    <p>Tecnicatura en Programación, cursando actualmente.</p>

                    <h4>Desarrollo Web Front-End</h4>
                    <h4>2020 - 2023 - Coderhouse</h4>
                    <p>Desarrollo Web, trabajando con HTML y CSS. <br />
                        Programando con Javascript, React Js y Next Js.
                    </p>

                    <h4 >Cursos</h4>
                    <h4 >2021 - 2022 Platzi</h4>
                    <p>Cursos en varias tecnologías, también metodologías ágiles. <br />
                        Typescript, GraphQL, Jest, Gatsby Js. <br />
                        Scrum.
                    </p>

                    <h4>2019 - Autodidacta</h4>
                    <p>Cursos online, experimentando con diferentes lenguajes y softwares.</p>
                </div>

                <h2>SKILLS</h2>
                <span></span>

                <div className='languages-icons'>
                    {languages?.map((icon: Languages, i: number) => {
                        return (
                            <i key={i} className={icon?.icon}></i>
                        )
                    })}
                </div>

                <div className='cv__list'>
                    <h4>Lenguajes</h4>
                    <ul className='list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>GraphQL </li>
                    </ul>
                </div>

                <div className='cv__list'>
                    <h4>Frameworks y Procesadores</h4>
                    <ul className='list'>
                        <li>Vtex IO</li>
                        <li>React Js</li>
                        <li>Next Js</li>
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