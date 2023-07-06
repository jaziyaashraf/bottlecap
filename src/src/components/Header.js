import React from 'react'
import {Nav, Navbar,Container} from 'react-bootstrap'
import './Header.css'
function Header() {
  return (
    <Navbar className="navbar" bg="dark" data-bs-theme="dark">
    <Container>
      <div className='logo'>
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      </div>
      <div className='nav'>
      <Nav className=" nav me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Pages</Nav.Link>
        <Nav.Link href="#pricing">Blog</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header