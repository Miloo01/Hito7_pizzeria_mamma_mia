import React from 'react'
import { useState } from 'react'

const Login = () => {

     //Estados del formulario
        const [email, setEmail] = useState('');
        const [contraseña, setContraseña] = useState('');
    
        //Estado para los errores
        const [error, setError] = useState(false);
    
        const validarDatos = (e) => {
            e.preventDefault();
    
            //Validación;
            if (!email.trim() || !contraseña.trim())
                {
                setError(true);
                return;
            }
    
            // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
            setError(false);
            setEmail('');
            setContraseña('');
            
        };
    
    


    //Estados del formulario
  return (
     <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}

                
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="text"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

            <hr />
             
        </>
  )
}

export default Login