import React, { useContext } from 'react'
import { ProviderContext } from '../context/Context'
import type { Project, Languages } from '../context/Context'

const Proyects = () => {

    const { proyects, languages } = useContext(ProviderContext)

    return (
        <div className='section-container' id='proyects'>
            <h2>PROYECTOS</h2>
            <span></span>
            <p>Algunos proyectos que desarrolle hasta ahora</p>

            <div className='languages-icons'>
                {languages?.map((icon: Languages, i: number) => {
                    return (
                        <i key={i} className={icon?.icon}></i>
                    )
                })}
            </div>

            <div className='proyects-container'>
                {proyects?.map((proyect: Project, i: number) => {
                    return (
                        <div key={i} className='proyect'>
                            <a href={proyect?.url} target='_blank' rel='noreferrer'>
                                <img src={proyect?.img} alt='' />
                            </a>
                            <p>{proyect.languages}</p>
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
