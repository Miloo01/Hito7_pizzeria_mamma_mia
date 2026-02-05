import { useContext } from 'react'
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'
import { formatNumber } from '../utils/format'
import { CartContext } from '../context/CartContext'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import { UserContext } from '../context/UserContext'    



const Navbar = () => {
    const { getTotal, getCartCount } = useContext(CartContext)
    
    // se extrae el token y el método logout del contexto de usuario
    const { token, logout } = useContext(UserContext)

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'undefined')


    const total = getTotal()
    const cartCount = getCartCount()
    const totalFormatted = formatNumber(total)

    return (
        <RBNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <RBNavbar.Brand href="#home">Pizzería Mamma Mía</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                        <Link to="/" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-outline-light me-2" > 🍕 Home</button>
                        </Link>

                    </Nav>

                    <Nav>
                        {token ? (
                            <>
                                    <NavLink className={setActiveClass} to="/profile" style={{textDecoration: 'none', color: 'white'}}>🔓 Profile</NavLink>
                                    {/* Se llama a boton Logout al hacer click */}
                                    <NavLink onClick={logout} style={{cursor:'pointer', textDecoration: 'none', color: 'white'}}>🔒 Logout</NavLink>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" >🔐 Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>

                                
                            </>
                        )}
                    </Nav>

                    <Nav className="ms-auto">
                        <Link to="/cart" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-warning text-dark">
                                🛒 Total: ${totalFormatted} {cartCount > 0 && <span className="badge bg-danger ms-2">{cartCount}</span>}
                            </button>
                        </Link>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    )
}

export default Navbar