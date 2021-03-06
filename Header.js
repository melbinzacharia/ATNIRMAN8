import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark"  variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'>
     <Navbar.Brand > <span className='blue'>AT</span>Nirman</Navbar.Brand>
    </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
    <LinkContainer to='/aboutus'>
      <Nav.Link>AboutUs</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/Cart'>
      <Nav.Link >Cart</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/Login'>
      <Nav.Link >Login</Nav.Link>
    </LinkContainer>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
