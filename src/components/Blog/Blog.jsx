import React from 'react'
import './Blog.css'

const Blog = () => {

    const ObjectArray = [
        {category:'CIUDAD',title:'Artículo de puente',description:'Un puente es una construcción que permite salvar un accidente geografico',postDATE:'Hace 2m'},
        {category:'AVENTURA',title:'Artículo de bosque',description:'Lugar poblado de árboles y arbustos.Área con una importante densidad de',postDATE:'Hace 15m'},
    ]
  return (
   <>
    <div id='Blog_ContainerBackground'>
     <h3 id='Blog_H3'>BLOG</h3>
     <div id='BlogCards_Container'>
    <div id='BlogCards_BigCardsContainer'>
    </div>
    <div id='BlogBackground_Container'>
     </div>
     </div>

    </div>
   </>
  )
}

export default Blog