import React, { Component } from 'react';



class PerfilPersonal extends Component {
    constructor(props){
        super(props)
        console.log("entre " + this.id);
        console.log("entre " + this.props);
        this.state = {
            error: false,
            id : this.props.match.params.id,
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
        console.log("entre " + this.id);
        return (
            <ul>
                <li>{this.perfiles.id.name}</li>
                <li>{this.perfiles.id.username}</li>
                <li>{this.perfiles.id.mail}</li>
            </ul>
        );
    }
}


export default PerfilPersonal;
