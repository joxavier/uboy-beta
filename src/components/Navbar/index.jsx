import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogoWrap, LogoImg, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogoWrap>
              <LogoImg to='/' onClick={toggleHome} src={"./images/uboy_logo.png"} alt={"UBOY Logo"} />
            </NavLogoWrap>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='collaborators'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Collaborators</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='minters'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Minters</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='metaverse'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Join Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/mint'>Mint</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
