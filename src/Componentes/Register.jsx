import React from 'react'
import { useState } from 'react'


const Register = () => {

    //Estados del formulario
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarcontraseña, setConfirmarContraseña] = useState('');

    //Estado para los errores
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        //Validación;
        setError(false);


        if (!email.trim() || !contraseña.trim() || !confirmarcontraseña.trim()) {
            setError(true);
            alert("Todos los campos son obligatorios");

            
        } else if (contraseña.length < 6) {
            setError(true);
            alert("La contraseña debe tener al menos 6 caracteres");

            
        } else if (contraseña !== confirmarcontraseña) {
            setError(true);
            alert("Las contraseñas no coinciden");
            
        } else if (contraseña === confirmarcontraseña) {
            setError(false);
            alert("Registro exitoso");

        }

        

        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        setError(false);
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    };




    return (
        <>
            <form className="formulario w-50 mx-auto text-start" onSubmit={validarDatos}>

              
                
                <div className="form-group ">
                    <label className='style-e mt-4 mb-2'>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label className='style-c mt-4 mb-2'>Contraseña</label>
                    <input
                        type="text"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <div className="form-group ">
                    <label className='style-cc mt-4 mb-2'>Confirmar Contraseña</label>
                    <input
                        type="text"
                        name="confirmarcontraseña"
                        className="form-control"
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarcontraseña}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3 ">Enviar</button>
            </form>

         
        </>


    )
}

export default Register