import React from 'react'
import './Trending.css'
import CardImage1 from '../../assets/img/card_01.png'
import CardImage2 from '../../assets/img/card_02.png'
import CardImage3 from '../../assets/img/card_03.png'
import TrendingCards from './TrendingCards/TrendingCards'
    
const Trending = () =>{
  const ObjectArray = [
      { id:1,new:'NUEVO',img:CardImage1,title:'Montañas y magia',description:<p className='TrendingCards_CardPdescription'>Aquí la descripción para <span id='TrendingCards_CardPdescriptionSpan'>Montañas y magia</span></p>},
      { id:2,img:CardImage2,title:'Playas y sol',description:<p className='TrendingCards_CardPdescription'>La descripción de <span id='TrendingCards_CardPdescriptionSpan'>Playas y sol</span> debe ser esta</p>},
      { id:3,img:CardImage3,title:'Nieve y aventura',description:<p className='TrendingCards_CardPdescription'>Contiene la información de <span id='TrendingCards_CardPdescriptionSpan'>Nieve y aventura</span></p>}
  ] //Si bien no es muy necesario un ObjectArray en este proyecto, preferia hacerlo mas dinamico y mas ordenado
   //Pd: El tercer valor tuve que ponerle Html Tags porque tenia que resaltar palabras especificas de el string, entonces use el span para resaltarlas. 


  return (
    <>
    <div id='Trending_Container'>
        <h2 id='Trending_H1'>TENDENCIAS</h2>    
        <div id='Trending_CardContainerFlex'>
            { ObjectArray ? //Aplico .map al array, donde me recorre cada objeto del array ya hecho, y por cada item me genera un TrendingCard con sus dichos valores
            ObjectArray.map(item=>(
                <TrendingCards key={item.id} nuevo={item.new} img={item.img} title={item.title} description={item.description}/>
            )) 
            : null
            }
        </div>
    </div>
    </>
  )
}

export default Trending