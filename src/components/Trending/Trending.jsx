import React from 'react'
import './Trending.css'
import CardImage1 from '../../assets/img/card_01.png'
import CardImage2 from '../../assets/img/card_02.png'
import CardImage3 from '../../assets/img/card_03.png'
import TrendingCards from './TrendingCards/TrendingCards'
    
const Trending = () =>{
  const ObjectArray = [
      { id:1,img:CardImage1,title:'Montañas y magia',description:'Aquí la descripción para Montañas y magia'},
      { id:2,img:CardImage2,title:'Playas y sol',description:'La descripción de Playas y sol debe ser esta.'},
      { id:3,img:CardImage3,title:'Nieve y aventura',description:'Contiene la información de Nieve y aventura'}
  ]



  return (
    <>
    <div id='Trending_Container'>
        <h2 id='Trending_H1'>TENDENCIAS</h2>    
        <div id='Trending_CardContainerFlex'>
            { ObjectArray ? 
            ObjectArray.map(item=>(
                <TrendingCards key={item.id} img={item.img} title={item.title} description={item.description}/>
            )) 
            : null
            }
        </div>
    </div>
    </>
  )
}

export default Trending