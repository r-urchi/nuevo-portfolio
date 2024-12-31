import React from 'react'
import Home from './Home'
import Proyects from './Proyects'
import AboutMe from './AboutMe'
import Cv from './Cv'

const Sections = () => {

    return (
        <div className='sections'>
            <Home />
            <AboutMe />
            <Cv />
            <Proyects />
        </div>
    )
}

export default Sections