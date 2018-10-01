import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Perfiles from './Pages/Perfiles';
import PerfilPersonal from './Components/PerfilPersonal';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import Header from './Layout/Header';
import Footer from './Layout/Footer';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route component={Header} />
    <Route exact path='/' component={Home} />
    <Route exact path='/perfiles/' component={Perfiles} />
    <Route exact path='/perfilPersonal/:id' component={PerfilPersonal} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/registro/' component={Registro} />
    <Route component={Footer} />
  </div>
</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
