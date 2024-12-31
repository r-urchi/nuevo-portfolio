import React from 'react'

const Header = () => {

    return (
        <div className='header' id='#'>
            <div className='circle-up'></div>
            <div className='header__container'>
                <h1>RAMÓN URCHIPIA</h1>
                <h3>FRONT-END DEVELOPER</h3>

                <div className='container-img'>
                    <img alt='Ramón Urchipia' src='img/ramon.jpg' />
                </div>

                <div className='container-p'>
                    <p>Hola, soy Ramón! <br />
                        Me dedico al diseño y desarrollo web. En lo personal, me apasiona mucho el desarrollo de software y aprender nuevas tecnologías, así como afrontar nuevos desafíos. <br />
                        Actualmente me encuentro cursando Tecnicatura en Programación en Instituto Teclab. <br />
                        Soy de aprendizaje rápido y me encanta leer sobre tecnología.</p>
                </div>
            </div>
        </div>
    )
}

export default Header