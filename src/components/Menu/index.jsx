import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import Button from '../Button';

import './style.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img
        alt="Logo"
        className="Logo"
        src={Logo}
      />
    </Link>

    <Button as={Link} to="/new/video">
      Novo Vídeo
    </Button>
  </nav>
);

export default Menu;
