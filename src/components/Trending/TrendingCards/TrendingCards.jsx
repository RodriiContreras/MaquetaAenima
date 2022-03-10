import React from 'react'
import './TrendingCards.css'

const TrendingCards = ({nuevo,img,title,description}) => {//Recibe por props todos los valores de los items
  return (
    <>
    <div id='TrendingCards_Card'>
        <div id='TrendingCards_CardImgContainer'>
          { <img id='TrendingCards_CardImg' src={img} /> } 
          {nuevo ? <div id='TrendingCards_CardNew'><p id='TrendingCards_CardNewP'>{nuevo}</p></div> : null}
          {/* Hago un condicional en especifico por el primer item, ya que tiene un Pop-Up de "NUEVO", 
              entonces los dos items restantes que no tienen ese valor simplemente no ponen nada */}
        </div>
        <p id='TrendingCards_CardPTitle'>{title}</p>
        <p>{description}</p>

    </div>
    </>
  )
}

export default TrendingCards