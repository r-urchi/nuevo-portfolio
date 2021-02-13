import React from 'react';

const Header = () => {

    return(
        <div className="header" id="/">
            <div className="header__container">
                <h1>RAMÓN URCHIPIA</h1>
                <h3>FRONT-END DEVELOPER</h3>

                <div className="container-img">
                    <img src="img/ramon.jpg"/>
                </div>

                <div className="container-p">
                    <p>Bienvenidos a mi portfolio! </p>
                    <p>Me dedico al diseño y desarrollo web. Comencé a sumergirme en este mundo de las tecnologías como autodidacta, actualmente estoy realizando cursos en escuela Coderhouse, con el fin de ordenar y mejorar los conocimientos que fui adquiriendo estos últimos años.</p>
                </div>
            </div>
        </div>
    )
}

export default Header;