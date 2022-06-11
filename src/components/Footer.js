import React, { useContext } from 'react';
import { ProviderContext } from '../context/Context';

const Footer = () => {

    const { contact } = useContext(ProviderContext)

    return(
        <div className="footer">
            <div className="footer__border"></div>
            <div className="contact">
                {contact.map((cont, i) => {
                    return(<a key={i} target="_blank" rel="noreferrer" href={cont.url}><i className={cont.icon}></i></a>)
                })}
            </div>

            <p>© 2022 Ramón Urchipia</p>
        </div>
    )
}

export default Footer;