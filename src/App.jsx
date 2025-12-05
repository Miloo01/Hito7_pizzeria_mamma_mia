import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'
import Register from './Componentes/Register'
import Login from './Componentes/Login'
import Cart from './Componentes/Cart'
import './App.css'




const App = () =>  {
 

  return (
    <div className="app">
      <Navbar />

      <main className='container p-0'  >
       <Home /> 
       { /*<Register /> */}
       {/*<Login /> */}
         
      </main>
      {/*<Cart />*/}
      <Footer />
    </div>
  )
}

export default App
