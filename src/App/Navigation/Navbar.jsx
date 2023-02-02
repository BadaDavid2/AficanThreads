import React, { useState } from 'react'
import Drawer from './Drawer'
import links from './navLinks'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [show, setShow] = useState(true)
  const styles = {
    transform: !show ? "rotate(180deg)":"",
    display: !show ?'none':""

  }
  const stylesClose = {
    transform: !show ? "rotate(180deg)":"",
    display: !show ?'':"none"

  }
  const slide = ()=>{
   return  setShow((prevState)=>!prevState)
  }

  return (
    <>
      <nav>
        <Link to='home' smooth><div className="logo">African<span>Threads</span></div></Link>
        <ul>
          {
            links.map((ele)=> <li key={ele.link}><Link to={ele.link} smooth >
            {ele.link}
          </Link></li>)
          }
        </ul>
        <div className="hamburger" style={styles} onClick={slide}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
<AiOutlineClose onClick={slide} className="close" style={stylesClose}/>
      </nav>
      <Drawer  links = {links} slide={slide} show={show}/>
    </>
  )
}

export default Navbar
