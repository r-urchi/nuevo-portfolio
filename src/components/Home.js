import React from 'react';

const Header = () => {

    return (
        <div className="header" id="#">
            <div className="circle-up"></div>
            <div className="header__container">
                <h1>RAMÓN URCHIPIA</h1>
                <h3>FRONT-END DEVELOPER</h3>

                <div className="container-img">
                    <img alt='Ramón Urchipia' src="img/ramon.jpg" />
                </div>

                <div className="container-p">
                    <p>Hola! </p>
                    <p>Soy Ramón, me dedico al diseño y desarrollo web. Me apasiona
                        mucho el desarrollo de software y aprender nuevas tecnologías, así como afrontar
                        nuevos desafíos. Soy de aprendizaje rápido y me encanta leer sobre tecnología.
                    </p>
                    <p>Te invito ver mis proyectos!</p>
                </div>
            </div>
        </div>
    )
}

export default Header;