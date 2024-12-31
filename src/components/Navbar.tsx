import React, { useContext } from 'react'
import { ProviderContext } from '../context/Context'
import type { Link } from '../context/Context'

const Navbar = () => {

    const { links } = useContext(ProviderContext)

    return (
        <div className='navbar'>
            {links?.map((link: Link, i: number) => {
                return (<li key={i}><a href={`#${link?.url}`}>{link?.name}</a></li>)
            })}
        </div>
    )
}

export default Navbar