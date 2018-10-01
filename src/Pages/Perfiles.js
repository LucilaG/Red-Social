import React, { Component } from 'react';

import Perfil from '../Components/Perfil'

class Perfiles extends Component {
  constructor(props){
    super(props)
    this.state = {
        error: false,
        isLoaded: false,
        perfiles: []
    }
    
  }
  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            perfiles: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
  }

  render() {
    const { error, isLoaded, perfiles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {perfiles.map(
            perfil=><Perfil perfil={perfil}  />)
          }
        </ul>
      );
    }
  }
}

export default Perfiles;
