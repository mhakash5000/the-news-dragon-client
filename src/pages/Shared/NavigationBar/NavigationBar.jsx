import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
      const { user } = useContext(AuthContext);
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/category/0">Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && <FaUserCircle style={{ fontSize: "2rem" }} />}
                {user ? (
                  <Button variant="dark">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;