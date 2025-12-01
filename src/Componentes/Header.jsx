import React from 'react'

const headerStyle = {
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(https://thumbs.dreamstime.com/z/fondo-de-la-pizza-varios-tipos-italiana-comida-r%C3%A1pida-vista-desde-azotea-265118910.jpg?ct=jpeg)',
  
  backgroundSize: 'cover',
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'overlay'
}

const Header = () => {
  return (
   <header className='text-center text-white d-flex align-items-center justify-content-center ' style={headerStyle} >
        <div className='p-3  w-100'>
            <h1 className='display-4 fw-bold'>¡Pizzería Mamma Mía!</h1>
            <p className='lead'>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr />
            <br />
        </div>
   </header>
  )
}

export default Header