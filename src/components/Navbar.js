import React, { useState } from 'react';

const Navbar = () =>{

    const [links, setLinks] = useState([
        {name: 'Inicio', url: ''}, 
        {name: 'Proyectos', url: 'proyects'}, 
        {name: 'Sobre mí', url: 'about'},
        {name: 'CV', url: 'cv'}
    ])

    return(
        <div className="navbar">
             {links.map((link, i) => {
                    return (<li key={i}><a href={`#${link.url}`}>{link.name}</a></li>)
                })}
        </div>
    )
}

export default Navbar;