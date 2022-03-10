import React from 'react'
import './BlogCards.css'
import Time from '../../../assets/icons/time.png'

const BlogCards = () => {

  return (
    <>
    <div id='BlogCards_Containers'>
      <div id='BlogCards_CardsContainer'> 
     
      <div>
     
           <div id='BlogCards_BigCards1stImage'>
            <p id='BlogCards_BigCardsCategory'>CIUDAD</p>
       
            <p id='BlogCards_BigCardsTitle'>Artículo de puente</p>
            <p  id='BlogCards_BigCardsDesc'>Un puente es una construcción que permite salvar un accidente geográfico</p>
            <p id='BlogCards_BigCardsDate'><img id='BlogCards_BigCardsDateTime' src={Time}/>Hace 2m</p>
           </div>
     
           <div id='BlogCards_BigCards2ndImage'>
           <p id='BlogCards_BigCardsCategory2'>AVENTURA</p>
       
            <p id='BlogCards_BigCardsTitle2'>Artículo de bosque</p>
            <p  id='BlogCards_BigCardsDesc2'>Lugar poblado de árboles y arbustos.Área con una importante densidad de</p>
            <p id='BlogCards_BigCardsDate2'><img id='BlogCards_BigCardsDateTime2' src={Time}/>Hace 15m</p>
             
           </div>
     
      </div>

         <div id='BlogCards_SmallCardsContainer'>
           <div id='BlogCards_Cards'>
             <div id='BlogCards_CardsImg1'>
             </div>
             <p className='BlogCards_CardsTitle'>Artículo de elefante</p>
             <p className='BlogCards_CardsPostDate'><img src={Time}/>Hace 3h</p>
            </div>

            <div className='BlogCards_CardsMargin'>
             <div id='BlogCards_CardsImg2'>
             </div>
             <p className='BlogCards_CardsTitle'>Artículo de loro</p>
             <p className='BlogCards_CardsPostDate'><img src={Time}/>Hace 4h</p>
            </div>

            <div className='BlogCards_CardsMargin'>
             <div id='BlogCards_CardsImg3'>        
             </div>
             <p className='BlogCards_CardsTitle'>Artículo de camino</p>
             <p className='BlogCards_CardsPostDate'><img src={Time}/>Hace 8h</p>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default BlogCards