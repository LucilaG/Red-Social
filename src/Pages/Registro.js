import React from 'react'

class Registro extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="nombre" placeholder="Nombre" className="inputForm" required />
                    <input type="text" name="apellido" placeholder="Apellido" className="inputForm" required />
                    <input type="number" name="dni" placeholder="DNI" className="inputForm" required />
                    <input type="email" name="mail" placeholder="Mail" className="inputForm" required />
                    <input type="number" name="telefono" placeholder="Teléfono" className="inputForm" required />
                    <button class="send">Registrarse</button>
                </form>
            </div>
        )
    }
}
export default Registro;