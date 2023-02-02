import React from 'react'
import {RiHome2Fill, RiContactsFill} from 'react-icons/ri'
import {BsInfoSquareFill} from 'react-icons/bs'
import {GiClothes} from 'react-icons/gi'
import {Link} from 'react-scroll'
const Drawer = ({links,show,slide}) => {
  const styles = {
    transform: !show ? "translateX(0%)" : "translateX(-120%)",
    // display: show? "none": ""
  }
  return (
    <>
      <aside style={styles}>
      <Link  smooth spy to="home">
        <RiHome2Fill className='slide-icon' onClick={slide}/>
      </Link>
      <Link smooth spy to="clothes">
        <GiClothes className='slide-icon' onClick={slide}/>
      </Link>
      <Link  smooth spy to="story">
        <BsInfoSquareFill className='slide-icon' onClick={slide}/>
      </Link>
      <Link smooth spy to="contact">
        <RiContactsFill className='slide-icon' onClick={slide}/>
      </Link>
        
      </aside>
    </>
  )
}

export default Drawer
