import React from 'react'
import { Link } from 'react-router-dom'

import Template from '../../components/Template'

const NewCategory = () => {
  return (
    <Template>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input type='text' />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to='/'>
        Ir para Home
      </Link>
    </Template>
  )
}

export default NewCategory