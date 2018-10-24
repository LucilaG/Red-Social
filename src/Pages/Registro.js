import React from 'react'
import firebase from '../Config/firebase';

class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            mail: '',
        }
    }

    handleSubmit(event){
        firebase.database().red('usuarios/').set({
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            mail: this.state.mail,
        })
        event.preventDefault();
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.value;

       this.setState({
           [name]:value
       });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="nombre" placeholder="Nombre" className="inputForm" 
                     onChange={this.handleChange.bind(this)} required />

                    <input type="text" name="apellido" placeholder="Apellido" className="inputForm" 
                     onChange={this.handleChange.bind(this)} required />

                    <input type="email" name="mail" placeholder="Mail" className="inputForm" 
                    onChange={this.handleChange.bind(this)} required />


                    <button class="send">Registrarse</button>
                </form>
            </div>
        )
    }
}
export default Registro;