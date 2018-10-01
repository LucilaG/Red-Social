import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Perfil extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to={'/perfilPersonal/'+this.props.perfil.id} params={this.props}>{this.props.perfil.name}</Link>
        </div>
      </div>

    );
  }
}

export default Perfil;
