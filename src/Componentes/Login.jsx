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
            if (!email.trim() || !contraseña.trim()){
                setError(true);
                alert("Todos los campos son obligatorios");

            } else if (contraseña.length < 6) {
                setError(true);
                alert("La contraseña debe tener al menos 6 caracteres");
            } else {
                setError(false);
                alert("Login exitoso");
            }
    
            // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
            setError(false);
            setEmail('');
            setContraseña('');
            
        };
    
    


    //Estados del formulario
  return (
     <>
            <form className="formulario w-50 mx-auto text-start" onSubmit={validarDatos}>

                <h3 className='style-login mt-4 fs-2'>Login</h3>

                <div className="form-group">
                    <label className='style-e mt-4 mb-2'>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Ingresa tu correo'
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label className='style-c mt-4 mb-2'>Contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        placeholder='Ingresa tu contraseña'
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
             
        </>
  )
}

export default Login