import React from 'react'
import './BlogCards.css'

const BlogCards = () => {
const ObjectArray = [
    {category:'CIUDAD',title:'Artículo de puente',description:'Un puente es una construcción que permite salvar un accidente geografico',postDATE:'Hace 2m'},
    {category:'AVENTURA',title:'Artículo de bosque',description:'Lugar poblado de árboles y arbustos.Área con una importante densidad de',postDATE:'Hace 15m'},
]

  return (
    <>
    <div id='BlogCards_Containers'>
      <div id='BlogCards_CardsContainer'> 
     
      <div>
     
           <div id='BlogCards_BigCards1stImage'>
            <p></p>
           </div>
     
           <div id='BlogCards_BigCards2ndImage'>
             
           </div>
     
      </div>

         <div id='BlogCards_SmallCardsContainer'>
           <div id='BlogCards_Cards'>
             <div id='BlogCards_CardsImg1'>
                <p></p>
             </div>
            </div>

            <div className='BlogCards_CardsMargin'>
             <div id='BlogCards_CardsImg2'>

             </div>
            </div>

            <div className='BlogCards_CardsMargin'>
             <div id='BlogCards_CardsImg3'>
             
             </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default BlogCards