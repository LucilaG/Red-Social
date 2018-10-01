import React, { Component } from 'react';



class PerfilPersonal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            isLoaded: false,
            perfiles: [],
            id: props.match.params.id - 1
        }
    }
    componentWillMount() {
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
            console.log(this.state.id);
            return (
                <ul>
                    <li>Nombre: {this.state.perfiles[this.state.id].name}</li>
                    <li>Usuario: {this.state.perfiles[this.state.id].username}</li>
                    <li>Mail: {this.state.perfiles[this.state.id].email}</li>
                </ul>
            );
        }
    }
}


export default PerfilPersonal;
