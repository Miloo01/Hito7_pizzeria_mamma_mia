import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { formatNumber } from "../utils/format";
import { UserContext } from '../context/UserContext';


const Cart = () => {
  const { cart, incrementCart, decrementCart, removeFromCart, getTotal } = useContext(CartContext);
  
  // Se extrae el token del contexto de usuario
  const { token } = useContext(UserContext);

  // 8- Estado para mostrar el mensaje de exito al pagar
  const [success, setSuccess] = useState(false);

  //7-Método para enviar el carrito al backend
  const handlePayment = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Enviamos el token real
      },
      body: JSON.stringify({
        cart: cart, // Enviamos el arreglo de productos
      }),
    });

    if (response.ok) {
      setSuccess(true);
      alert("Pago realizado con éxito");
    } else {
      alert("Error al procesar el pago");
    } 
  };


  return (
    <div className="cart-container d-flex flex-column justify-content-around align-items-center p-4 mt-4 p-5 bg-light">
      <h4 className="mb-3">Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <>
          <ul className='list-group w-100'>
            {cart.map((pizza) => (
              <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} width="70" className="me-3 rounded" />
                  <div>
                    <strong className="text-capitalize">{pizza.name}</strong>
                    <p className="text-muted mb-0">${formatNumber(pizza.price)}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => decrementCart(pizza.id)}
                  >
                    −
                  </button>
                  <span className="badge bg-primary">{pizza.count}</span>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => incrementCart(pizza.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h5 className="mt-4 mb-4">Total: $ {formatNumber(getTotal())}</h5>
          {/*lógica para mostrar el botón de pagar solo si el usuario está autenticado// mensaje de éxito*/}
          {success && (
            <div className="alert alert-success w-100 text-center">
              ✅ ¡Felicidades! Tu compra ha sido procesada exitosamente.
            </div>
          )}


          <button className="btn btn-primary mb-4 px-5"
          //el boton se deshabilita si no hay token
            disabled={!token || cart.length === 0}
            onClick={handlePayment} //7- Al hacer click se llama a handlePayment
            style={{ backgroundColor: "#1A1A1A", border: "none", padding: "10px 25px", borderRadius: "50px", fontWeight: "bold", transition: "0.3s" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#FF8800"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#1A1A1A"}>Pagar
          </button>

          {!token && <p className="text-danger">Debes iniciar sesión para proceder al pago.</p>}
        </>
      )}
    </div>
  )
}

export default Cart