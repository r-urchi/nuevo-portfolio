import React, { createContext, useState, ReactNode } from 'react'

type ContextType = {
  links: Link[]
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>
  proyects: Project[]
  setProyects: React.Dispatch<React.SetStateAction<Project[]>>
  languages: Languages[]
  setLanguages: React.Dispatch<React.SetStateAction<Languages[]>>
  contact: Contact[]
  setContact: React.Dispatch<React.SetStateAction<Contact[]>>
}

export const ProviderContext = createContext<ContextType | undefined>(undefined)

const { Provider } = ProviderContext

type ContextProviderProps = {
  children: ReactNode
}

export interface Link {
  name: string
  url: string
}

export interface Project {
  url: string
  img: string
  languages: string
  code?: string
  name: string
}

export interface Languages {
  icon: string
}

export interface Contact {
  icon: string
  url: string
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // -------------------------------------------
  // --- Links Navbar
  // -------------------------------------------
  const [links, setLinks] = useState<Link[]>([
    { name: 'Inicio', url: '' },
    { name: 'Proyectos', url: 'proyects' },
    { name: 'Sobre mí', url: 'about' },
    { name: 'CV', url: 'cv' },
  ])

  // -------------------------------------------
  // --- Info Proyectos
  // -------------------------------------------
  const [currentProyects, setcurrentProyects] = useState<Project[]>([
    {
      name: 'Hugo Boss',
      url: 'https://www.hugoboss.cl/',
      img: 'img/hugoboss.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
    {
      name: 'Dior',
      url: 'https://shop.dior.com.ar/',
      img: 'img/dior.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
    {
      name: 'Farmacity',
      url: 'https://www.farmacity.com/',
      img: 'img/farmacity.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
    {
      name: 'The Food Market',
      url: 'https://www.thefoodmarket.com.ar/',
      img: 'img/tfm.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
    {
      name: 'Simplicity',
      url: 'https://www.simplicity.com.ar/',
      img: 'img/simplicity.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
    {
      name: 'Moulinex',
      url: 'https://tienda.moulinex.com.ar/',
      img: 'img/moulinex.png',
      languages: 'VTEX IO, REACT, TS, JS, SASS',
    },
  ])

  const [proyects, setProyects] = useState<Project[]>([
    {
      name: 'Estudio Jurídico DB',
      url: 'https://estudiodb.netlify.app/',
      img: 'img/estudio.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/Estudio-DB'
    },
    {
      name: 'Estudio SML',
      url: 'https://sml-abogados.com/',
      img: 'img/sml.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/SML'
    },
    {
      name: 'ClimApp',
      url: 'https://climapp-ru.netlify.app/',
      img: 'img/climapp.jpg',
      languages: 'REACT, SASS, API',
      code: 'https://github.com/r-urchi/Clima-App'
    },
    {
      name: 'Vudama',
      url: 'https://vudama.netlify.app/',
      img: 'img/vudama.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/Vudama'
    },
    {
      name: 'Fotografía',
      url: 'https://ramonurchipiaph.netlify.app/',
      img: 'img/fotografia.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/Fotografia'
    },
    {
      name: 'Piedra, papel o tijera',
      url: 'https://ppt-urchi.netlify.app/',
      img: 'img/ppt.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/PPT'
    },
    {
      name: 'Retro Games',
      url: 'https://retrogames-ru.netlify.app/',
      img: 'img/retrogames.jpg',
      languages: 'REACT, SASS, FIREBASE',
      code: 'https://github.com/r-urchi/react-ecommerce'
    },
    {
      name: 'Epi-commerce',
      url: 'https://js-epi.netlify.app/',
      img: 'img/carrito.jpg',
      languages: 'HTML, SASS, JS, JSON',
      code: 'https://github.com/r-urchi/carrito-de-compras'
    },
    {
      name: 'Mi anterior Portfolio',
      url: 'https://ramon-urchipia-fe.netlify.app/',
      img: 'img/portfolio.jpg',
      languages: 'HTML, SASS, JS',
      code: 'https://github.com/r-urchi/Portfolio'
    }
  ])

  // -------------------------------------------
  // --- Iconos Proyectos
  // -------------------------------------------
  const [languages, setLanguages] = useState<Languages[]>([
    { icon: 'fab fa-html5' },
    { icon: 'fab fa-css3-alt' },
    { icon: 'fab fa-sass' },
    { icon: 'fab fa-js' },
    { icon: 'fab fa-react' },
    { icon: 'fab fa-github' },
    { icon: 'fab fa-figma' },
  ])

  // -------------------------------------------
  // --- Info Footer
  // -------------------------------------------
  const [contact, setContact] = useState<Contact[]>([
    { icon: 'fab fa-github', url: 'https://github.com/r-urchi' },
    { icon: 'fas fa-mobile-alt', url: 'https://api.whatsapp.com/send?text=&phone=541168515480' },
    { icon: 'far fa-envelope', url: 'mailto:ramonurchipia@gmail.com' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ramonurchipia/' },
  ])

  return (
    <Provider value={{ links, setLinks, currentProyects, setcurrentProyects, proyects, setProyects, languages, setLanguages, contact, setContact }}>
      {children}
    </Provider>
  )
}

export default ContextProvider
