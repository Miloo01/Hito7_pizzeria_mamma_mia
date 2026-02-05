import React from 'react'
import { createContext, useState } from 'react';

// 1 paso crear el contexto
export const UserContext = createContext()

//2 paso crear el provider
const UserProvider = ({ children }) => {
        //Estado inicial de token de true a null (porque al inicio no hay token)
    const [token, setToken] = useState(null); 
    const [email, setEmail] = useState(null);

    // Estado para guardar la info del perfil que viene del backend
    const [user, setUser] = useState(null);
    
    // Método para iniciar sesión {Login}
    const login = async(email, password) => {

      const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data.token) {
            setToken(data.token); // Guardar el token en el estado
            setEmail(data.email); // Guardar el email en el estado
        } else {
            throw new Error(data.message || "Error al iniciar sesión");
        }
    };

    // Método para registrar un usuario {Register}
    const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data.token) {
            setToken(data.token); // Guardar el token en el estado
            setEmail(data.email); // Guardar el email en el estado
        } else {
            throw new Error(data.message || "Error al registrar usuario");
        }
    };

    // Método para cerrar sesión
    const logout = () => {
      setToken(null);
      setEmail(null);
      setUser(null);
    };

    //método para obtener el perfil del usuario consumiendo /api/auth/me
    const getProfile = async () => {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      
      
      // si la respuesta es correcta, se guardan los datos en el estado user
      if (response.ok) {
        setUser(data);
      } else {
        throw new Error(data.message || "Error al obtener el perfil del usuario");
      }
    };

  return (
    <UserContext.Provider value={{token, email, user, login, register ,logout, getProfile}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider