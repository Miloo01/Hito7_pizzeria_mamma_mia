import React from 'react'


const CardPizza = ({ name = 'Pizza', price = 0, ingredients = [], img }) => {
    const priceFormatted = typeof price === 'number' ? new Intl.NumberFormat('es-CL').format(price) : price

    return (
        <div className="container-cards">
            <div className="card shadow-sm h-100 ">
                <img src={img || 'https://via.placeholder.com/400x250?text=Pizza'} className="card-img-top" alt={name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title"> Pizza {name}</h5>
                    <hr />
                    <h5> 🍕 Ingredientes:</h5>
                    <p className="card-text">{ingredients && ingredients.length ? ingredients.join(', ') : 'Ingredientes no especificados'}</p>
                    <hr />
                    <p className="fw-bold text-success">${priceFormatted}</p>
                    <div className="mt-auto">
                        <button className="btn btn-info text-white me-2">Ver Más 👀</button>
                        <button className="btn btn-danger">Añadir 🛒</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza
