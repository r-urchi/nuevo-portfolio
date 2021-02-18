import React, { createContext, useState } from 'react';
export const ProviderContext = createContext();

const { Provider } = ProviderContext;

const ContextProvider = ({children}) => {

  // -------------------------------------------
  //--- Links Navbar
  // -------------------------------------------

  const [links, setLinks] = useState([
                                        {name: 'Inicio', url: ''}, 
                                        {name: 'Proyectos', url: 'proyects'}, 
                                        {name: 'Sobre mí', url: 'about'},
                                        {name: 'CV', url: 'cv'}
                                    ])

                                    
  // -------------------------------------------
  //--- Info Proyectos
  // -------------------------------------------
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

  // -------------------------------------------
  //--- Iconos Proyectos
  // -------------------------------------------
const [languages, setLanguages] = useState([
                                              {icon: 'fab fa-html5'},
                                              {icon: 'fab fa-css3-alt'},
                                              {icon: 'fab fa-sass'},
                                              {icon: 'fab fa-js'},
                                              {icon: 'fab fa-react'}
                                          ])

  // -------------------------------------------
  //--- Info Footer
  // -------------------------------------------
  const [contact, setContact ] = useState([
                                            {icon: 'fab fa-github', url: 'https://github.com/r-urchi'}, 
                                            {icon: 'fas fa-mobile-alt', url: 'https://api.whatsapp.com/send?text=&phone=541168515480'}, 
                                            {icon: 'far fa-envelope', url: 'mailto:ramonurchipia@gmail.com'}, 
                                            {icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ramonurchipia/'}
                                          ])  


    return(
        <Provider value={{links, setLinks, contact, setContact, proyects, setProyects, languages, setLanguages}}>
        {children}
      </Provider>
    )
}

export default ContextProvider