import React from 'react'
import './Footer.css'
import Image from '../../assets/logo/logo_02.png'
import FacebookIcon from '../../assets/icons/facebook.png'
import InstagramIcon from '../../assets/icons/instagram.png'
const Footer =() => {
  return (
    <>
    <div id='Footer_Container'>

 <div id='Footer_ContainerFlex'>
        <div id='Footer_ContainerImage'>
         <img src={Image}/>
        </div>

        <div id='Footer_ContainerIcons'>
         <img id='Footer_InstagramIcon' src={InstagramIcon}/>
         <img src={FacebookIcon}/>
        </div>
    </div>
</div>
    </>
  )
}

export default Footer