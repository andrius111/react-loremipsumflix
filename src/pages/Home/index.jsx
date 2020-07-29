import React from 'react'

import InitialData from '../../data/initial_data.json'

import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={ InitialData.categorias[0].videos[0].titulo }
        url={ InitialData.categorias[0].videos[0].url }
        videoDescription={ 'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!' }
      />

      <Carousel
        ignoreFirstVideo
        category={ InitialData.categorias[0] }
      />

      <Carousel category={ InitialData.categorias[1] } />

      <Carousel category={ InitialData.categorias[2] } />      

      <Carousel category={ InitialData.categorias[3] } />      

      <Carousel category={ InitialData.categorias[4] } />      

      <Carousel category={ InitialData.categorias[5] } />      

      <Footer />
    </div>
  )
}

export default Home
