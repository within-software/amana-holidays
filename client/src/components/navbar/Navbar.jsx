import './Navbar.scss'
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  // Navbar when scroll 
  const [active , setActive] = useState(false);
  const isActive = () =>{
    window.scrollY > 0? setActive(true) : setActive(false);
  }

  useEffect ( () =>{
    window.addEventListener("scroll", isActive);
    return ()=>{
        window.removeEventListener("scroll", isActive);
    }
  }, []);

  const {pathname} = useLocation();
  const location = useLocation();
  const isHomePage = location.pathname === '/'

  // sub menu honeymoon
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  }
  const closeSubMenu = () => {
    setShowSubMenu(false);
  }

  //phone navbar menu
  const [open, setOpen] = useState(false);
  const isOpen = () => {
    setOpen(!open);
  }

  return (
    <div className={active || pathname !== "/"?"navbar active" : "navbar"}>
      <div className='container'>
        <div className='logo'>
          <img src='/amanholidays.png'/>
        </div>
        <div className='navLinksWrapper'>
          <div className='navLinks'>
            <Link className='link' to="/">
              Home
            </Link>
            <Link className='link' to="/packages">
              Packages
            </Link>
            <div 
              className='subMenuWrapper' 
              onMouseEnter={toggleSubMenu}
              onMouseLeave={toggleSubMenu}
            >
              Honeymoon
              {showSubMenu && (
                <div className='submenu'>
                  <Link className='link' to="/honeymoon/thailand">Thailand</Link>
                  <Link className='link' to="/honeymoon/malaysia">Malaysia</Link>
                  <Link className='link' to="/honeymoon/indonesia">Indonesia</Link>
                </div>
              )}
            </div>
            <Link className='link' to="/aboutus">
              About Us
            </Link>
          </div>
          <div className='contactUs'>
            <button>Contact Us</button>
          </div>
        </div>
        <div className='barIcon' onClick={isOpen}>
          <svg viewBox="0 0 1024 1024" className='barIconItem'>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        {open &&
        <div className='phone-navLinks'>
            <Link className='link' to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link className='link' to="/" onClick={() => setOpen(false)}>
              Packages
            </Link>
            <div 
              className='phone-navLinks-submenu'
              onClick={toggleSubMenu}
              onBlur={closeSubMenu}
            >
              Honeymoon
              {showSubMenu && (
                <div className='phone-navLinks-submenu-wrapper'>
                  <Link className='link' to="/honeymoon/thailand" onClick={() => setOpen(false)}>
                    Thailand
                  </Link>
                  <Link className='link' to="/honeymoon/malaysia" onClick={() => setOpen(false)}>
                    Malaysia
                  </Link>
                  <Link className='link' to="/honeymoon/indonesia" onClick={() => setOpen(false)}>
                    Indonesia
                  </Link>
                </div>
              )}
            </div>
            <Link className='link' to="/" onClick={() => setOpen(false)}>
              About Us
            </Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar