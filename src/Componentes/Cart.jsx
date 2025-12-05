import React from 'react'
import {pizzaCart} from '../pizzas.js'
import { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

  return (
    <>
        <h4>Detalles del pedido:</h4>
        <ul>
          {cart.map((pizza, index) => (
            <li key={index}>
              {pizza.name} - ${pizza.price} - {pizza.img} - Cantidad: {pizza.count}
            </li>
          ))}
        </ul>
    
    </>
    )
}

export default Cart