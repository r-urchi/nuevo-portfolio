import React, { useState } from 'react';

const Footer = () => {

    const [contact, setContact ] = useState([
        {icon: 'fab fa-github', url: 'https://github.com/r-urchi'}, 
        {icon: 'fas fa-mobile-alt', url: 'https://api.whatsapp.com/send?text=&phone=541168515480'}, 
        {icon: 'far fa-envelope', url: 'mailto:ramonurchipia@gmail.com'}, 
        {icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ramonurchipia/'}
    ])

    return(
        <div className="footer">
            <div className="footer__border"></div>
            <div className="contact">
                {contact.map((cont, i) => {
                    return(<a key={i} target="_blank" href={cont.url}><i className={cont.icon}></i></a>)
                })}
            </div>

            <p>© 2021 Ramón Urchipia</p>
        </div>
    )
}

export default Footer;