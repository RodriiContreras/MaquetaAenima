import React from 'react'
import ImageNavbar from '../../assets/logo/logo_01.png'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    console.log()
  return (
    <>
     <div id='Navbar_ContainerFlex'>
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

     </div>
    </>
  )
}

export default Navbar