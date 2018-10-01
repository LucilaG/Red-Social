import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div>
        <h1>Bienvenidos a la Red Social Lulitos</h1>
        <nav>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/login/'>Ingresar</Link></li>
            <li><Link to='/registro/'>Registrarse</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
