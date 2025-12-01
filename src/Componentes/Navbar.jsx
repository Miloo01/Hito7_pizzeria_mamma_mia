import React from 'react'
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'
import { formatNumber } from '../utils/format'
import { FaHome, FaShoppingCart, FaLock, FaUnlock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'



const Navbar = () => {
    // Simulaciones de estado
    const token = false // true = usuario logueado
    const total = 25000

    const totalFormatted = formatNumber(total)

    return (
        <RBNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <RBNavbar.Brand href="#home">Pizzería Mamma Mía</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <button type="button" className="btn btn-outline-light me-2" > 🍕 Home</button>
                    </Nav>

                    <Nav>
                        {token ? (
                            <>
                                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#login">🔐 Login</Nav.Link>
                                <Nav.Link href="#register">🔐 Register</Nav.Link>
                            </>
                        )}
                    </Nav>

                    <Nav className="ms-auto">
                        <button type="button" className="btn btn-warning text-dark">🛒 Total: ${totalFormatted}</button>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    )
}

export default Navbar