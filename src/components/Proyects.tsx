import React, { useContext } from 'react'
import { ProviderContext } from '../context/Context'
import type { Project } from '../context/Context'

const Proyects = () => {

    const { currentProyects, proyects } = useContext(ProviderContext)

    return (
        <div className='section-container' id='proyects'>
            <h2>PROYECTOS</h2>
            <span></span>

            <p>Algunos de los Proyectos que trabajé recientemente.</p>

            <div className='proyects-container'>
                {currentProyects?.map((proyect: Project, i: number) => {
                    return (
                        <div key={i} className='proyect'>
                            <a href={proyect?.url} target='_blank' rel='noreferrer'>
                                <img src={proyect?.img} alt='' />
                            </a>
                            <p>{proyect?.languages}</p>
                            <a target='_blank' rel='noreferrer' href={proyect?.url}>{proyect?.name}</a>
                        </div>
                    )
                })}
            </div>

            <span></span>
            
            <p>Proyectos que desarrollé hace ya algunos años...</p>

            <div className='proyects-container'>
                {proyects?.map((proyect: Project, i: number) => {
                    return (
                        <div key={i} className='proyect'>
                            <a href={proyect?.url} target='_blank' rel='noreferrer'>
                                <img src={proyect?.img} alt='' />
                            </a>
                            <p>{proyect?.languages}</p>
                            <a target='_blank' rel='noreferrer' href={proyect?.url}>{proyect?.name}</a>
                            <a target='_blank' rel='noreferrer' href={proyect?.code}>Ver código</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Proyects
