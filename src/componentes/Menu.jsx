import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar expand="lg" bg="danger">
      <Container>
        <Navbar.Brand href="#home"><Link to='/' className='text-dark text-decoration-none'><b>Happy-Cake</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='text-light text-decoration-none'>Home</Link>
            <Link to='/contacto' className='ms-3 text-light text-decoration-none'>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
