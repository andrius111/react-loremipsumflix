import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Template from '../../components/Template'
import FormField from '../../components/FormField'

const NewCategory = () => {
  const initialData = {
    name: '',
    description: '',
    color: '#000'
  }

  const [categorys, setCategorys] = useState([])
  const [formValues, setFormValues] = useState(initialData)

  const setValues = (input, value) => {
    setFormValues({
      ...formValues, 
      [input]: value
    })
  }

  const handleChange = event => {
    setValues(
      event.target.getAttribute('name'), 
      event.target.value
    )
  }

  const handleSubmit = event => {
    event.preventDefault()

    setCategorys([...categorys, formValues])
    setFormValues(initialData)
  }

  return (
    <Template>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={ handleSubmit }>

        <FormField 
          label='Nome da Categoria'
          type='text'
          name='name'
          value={ formValues.name }
          handleChange={ handleChange } 
        />

        <FormField 
          label='Descrição'
          type='textarea'
          name='description'
          value={ formValues.description }
          handleChange={ handleChange } 
        />

        <FormField 
          label='Cor'
          type='color'
          name='color'
          value={ formValues.color }
          handleChange={ handleChange } 
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        { categorys.map((category, index) => <li key={ index }>{ category.name }</li>) }
      </ul>

      <Link to='/'>
        Ir para Home
      </Link>
    </Template>
  )
}

export default NewCategory