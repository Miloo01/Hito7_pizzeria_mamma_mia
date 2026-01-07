import { Route, Routes } from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Home from './Pages/Home'
import Footer from './Componentes/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Pizza from './Pages/Pizza'
import NotFound from './Componentes/NotFound'
import Profile from './Componentes/Profile'
import './App.css'




const App = () =>  {
 

  return (
    <div className="app">
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/p001' element={<Pizza />} />
        <Route path='profile' element={<Profile />} /> 
        <Route path='/404' element={<NotFound />} /> 
        <Route path='*' element={<NotFound />} /> 
      </Routes>

      <main className='container p-0'  >
       {/*<Home />  /*hito 4 */}
       {/*<Pizza/>  {/* hito 4 */}
       {/*<Register /> {/* hito2 */}
       {/*<Login /> */ /* hito2 */}
         
      </main>
      {/*<Cart />*/ /* hito3 */}
      <Footer />
    </div>
  )
}

export default App
