import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="nombre" placeholder="Nombre" className="inputForm" required />
                    <input type="password" name="contraseña" placeholder="Contraseña" className="inputForm" required />
                    <button class="send">Ingresar</button>
                </form>
            </div>
        )
    }
}
export default Login;