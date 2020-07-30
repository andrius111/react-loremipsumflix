import React from 'react'

const FormField = (props) => {
  return (
    <div>
      <label>
        { props.label }:
        <input 
          type={ props.type }
          name={ props.name }
          value={ props.value }
          onChange={ props.handleChange } 
        />
      </label>
    </div>
  )
}

export default FormField