import React from 'react'
import './Trending.css'
import CardImage1 from '../../assets/img/card_01.png'
import CardImage2 from '../../assets/img/card_02.png'
import CardImage3 from '../../assets/img/card_03.png'
    
const Trending = () =>{
  
  return (
    <>
    <div id='Trending_Container'>
      <div id='Trending_Mobile'>
     <h2 id='Trending_H1'>TENDENCIAS</h2>
        <div id='Trending_CardContainerFlex'>

    
        <div id='TrendingCards_Card'>
        <div id='TrendingCards_CardImgContainer'>
         <img id='TrendingCards_CardImg' src={CardImage1} />
        <div id='TrendingCards_CardNew'><p id='TrendingCards_CardNewP'>NUEVO</p></div>
        </div>
        <p id='TrendingCards_CardPTitle'>Montañas y magia</p>
        <p className='TrendingCards_CardPdescription'>Aquí la descripción para <span id='TrendingCards_CardPdescriptionSpan'>Montañas y magia.</span></p>

      </div>

    <div id='TrendingCards_Card2'>
        <div id='TrendingCards_CardImgContainer'>
          <img id='TrendingCards_CardImg' src={CardImage2} />
        </div>
        <p id='TrendingCards_CardPTitle'>Playas y sol</p>
        <p className='TrendingCards_CardPdescription2'>La descripción de <span id='TrendingCards_CardPdescriptionSpan'>Playas y sol</span> debe ser esta.</p>
    </div>

    <div id='TrendingCards_Card3'>
        <div id='TrendingCards_CardImgContainer'>
          <img id='TrendingCards_CardImg' src={CardImage3} />
        </div>
        <p id='TrendingCards_CardPTitle'>Nieve y aventura</p>
        <p className='TrendingCards_CardPdescription2'>Contiene la información de <span id='TrendingCards_CardPdescriptionSpan'>Nieve y aventura.</span></p>

    </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Trending