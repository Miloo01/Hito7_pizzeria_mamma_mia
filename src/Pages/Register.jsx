import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    //Estados del formulario
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarcontraseña, setConfirmarContraseña] = useState('');

    //Estado para los errores
    const [error, setError] = useState(false);

    //Se extrae register del contexto
    const { register } = useContext(UserContext);
    const navigate = useNavigate();

    const validarDatos = async (e) => {
        e.preventDefault();

        //Validación local;

        if (!email.trim() || !contraseña.trim() || !confirmarcontraseña.trim()) {
            setError(true);
            alert("Todos los campos son obligatorios");
            return; // se detiene la ejecución si hay error
        } 
        
        if (contraseña.length < 6) {
            setError(true);
            alert("La contraseña debe tener al menos 6 caracteres");
            return;

        } 
        
        if (contraseña !== confirmarcontraseña) {
            setError(true);
            alert("Las contraseñas no coinciden");
            return;

        }
        
        // Si pasa las validaciones locales, se registra en el backend
        setError(false);
        await register(email, contraseña);

        alert("Registro exitoso");
        navigate("/"); // Redirigir a home

        
        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    };




    return (
        <>
            <form className="formulario w-50 mx-auto text-start" onSubmit={validarDatos}>

                <h3 className='style-login mt-4 fs-2'>Registro</h3>

                <div className="form-group ">
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

                <div className="form-group ">
                    <label className='style-cc mt-4 mb-2'>Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirmarcontraseña"
                        placeholder='Ingresa nuevamente tu contraseña'
                        className="form-control"
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarcontraseña}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3 "
                    style={{ backgroundColor: "#1A1A1A", border: "none", padding: "10px 25px", borderRadius: "50px", fontWeight: "bold", transition: "0.3s" }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#FF8800"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#1A1A1A"}>Enviar
                </button>
            </form>


        </>


    )
}

export default Register