import React from 'react'

import Logo from '../../assets/img/logo.png'
import Button from '../Button'

import './style.css'

const Menu = () => {
	return (
		<nav className="Menu">
      <a href="/">
        <img
          alt="Logo" 
          className="Logo"
          src={ Logo } 
        />
      </a>

      <Button href="/">
        Novo Vídeo
      </Button>
		</nav>
	)
}

export default Menu