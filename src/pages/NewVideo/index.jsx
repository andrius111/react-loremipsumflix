import React from 'react'
import { Link } from 'react-router-dom'

import Template from '../../components/Template'

const NewVideo = () => {
  return (
    <Template>
      <h1>Cadastro de Vídeo</h1>

      <Link to='/new/category'>
        Cadastrar Categoria
      </Link>
    </Template>
  )
}

export default NewVideo