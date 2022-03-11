import React from 'react'
import ImageNavbar from '../../assets/logo/logo_01.png'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  
  const buttonMenu = ()=>{
    let containerMenu = document.getElementById('NavbarListContent_MenuDesp')
    containerMenu.style.display=('block') 
    let NavBarUlContent = document.getElementById('NavBarListContent_UlContent')
    NavBarUlContent.style.display=('block')
    window.addEventListener('scroll', disableScroll); /* al tocar el boton del navbar, despliega mi menu
                                                       en mobile y ejecuta un evento que impide el scroll */
    let navbarOpacity = document.getElementById('Navbar_Opacity')
    navbarOpacity.style.display=('block')
  }

  function disableScroll(){  //esta funcion desactiva el scroll al ser llamada
    window.scrollTo(0,0);
  }
 
  const buttonKickMenu = ()=>{
    let containerMenu = document.getElementById('NavbarListContent_MenuDesp')
    containerMenu.style.display=('none') 
    window.removeEventListener('scroll', disableScroll); /* al tocar la "X" del menu desplegable, cierra mi menu
                                                           en mobile y ejecuta un evento que habilite el scroll*/
    let navbarOpacity = document.getElementById('Navbar_Opacity')
    navbarOpacity.style.display=('none')
  
    }

  return (
    <>
     <div id='Navbar_ContainerFlex'>
       <div id='Navbar_Opacity'></div>
        <Link to='/'id='Navbar_ImageLink'><img src={ImageNavbar}/></Link>
        <div id='NavBarListContent_UlContent'>
          <nav>
            <ul id='NavbarListContent_Ul'>

              <li className='NavbarListContent_Li'>
                <Link className='NavbarListContent_LiLINK' to='/'>
                    HOME
                </Link>
              </li>

              <li className='NavbarListContent_Li'>
                <Link className='NavbarListContent_LiLINK' to='/'>
                   TENDENCIAS
                </Link>

              </li>
                <li className='NavbarListContent_Li'>
                  <Link className='NavbarListContent_LiLINK' to='/'>
                     BLOG
                  </Link>
                </li>
            </ul>
          </nav> 
        </div>
        <div id='NavbarListContent_ButtonContainer'>

          <button onClick={buttonMenu} id='NavbarListContent_ButtonMobile'>
          <FontAwesomeIcon id='NavbarListContent_Icon' icon={faAlignJustify} />
          </button>

          <div id='NavbarListContent_MenuDesp'>
             <button onClick={buttonKickMenu} id='NavbarListContent_MenuDespButtonX'>X</button>
              <ul id='NavbarListContent_MenuDespUl'>
                <li className='NavbarListContent_MenuDespLi'><Link className='NavbarListContent_MenuDespLiLink' to='/'>HOME</Link></li>
                <li className='NavbarListContent_MenuDespLi'><Link className='NavbarListContent_MenuDespLiLink' to='/'>TENDENCIAS</Link></li>
                <li className='NavbarListContent_MenuDespLi'><Link className='NavbarListContent_MenuDespLiLink' to='/'>BLOG</Link></li>
              </ul>
          </div>
          </div>
          

     </div>
    </>
  )
}

export default Navbar