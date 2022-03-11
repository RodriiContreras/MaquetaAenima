import React from 'react'
import './HomeContent.css'
import Pin from '../../assets/icons/ic_pin.png'
import Arrow from '../../assets/icons/arrow.png'

const HomeContent = () => {
  return (
    <>
    <div id='HomeContent_Container'> 
        <div id='ImageDescription_Container'>
           <div id='ImageDescription_H1Container'>
               <h1 id='ImageDescription_H1'>
               <img id='ImageDescription_PinImg' src={Pin}/>
              AMERICA DEL SUR
               </h1>
            </div>
            <div id='ImageDescription_PContainer'>
              <p id='ImageDescription_p1'>Lugares maravillosos por America del Sur</p>
              <p id='ImageDescription_p2'>Estos son algunos lugares que elijen la mayoría de los turistas que visitan America del Sur.</p>
            </div>


          <div id='ImageDescription_RedLabelContent'>
            <div id='ImageDescription_RedLabel'>
            </div>
            <div id='ImageDescription_RedLabelCircle'>
            </div>
            <div id='ImageDescription_RedLabelCircle2'>
                <p id='ImageDescription_RedLabelCircle2P'>01</p>
            </div>
          </div>

          <div id='ImageDescription_NextAdventureContainer'>
             
              <p id='ImageDescription_NextAdventureP1'>PRÓXIMA AVENTURA  <img id='ImageDescription_NextAdventureImg'  src={Arrow}/></p>
              <p id='ImageDescription_NextAdventureP2'>Europa Meridional</p>
              <p id='ImageDescription_NextAdventureP3'>Forman parte veinte países, ej.España, Francia, etc.</p>

          </div>
            

        </div>
    </div>
    </>
  )
}

export default HomeContent