import React from 'react'
import { Container } from "react-bootstrap";


const Profile = () => {
  return (
    <Container className="pt-5">
        <h1>Perfil de Usuario</h1>
        <p>Nombre: Luigi</p>
        <img src="" alt="profile-image" />
        <p>Email: luigis@gmail.com</p>
        <button className='btn btn-primary mb-4'> Cerrar sesión</button>
        
    </Container>
  )
}

export default Profile