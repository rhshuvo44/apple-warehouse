import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Iphone-warehouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/inventors">inventors</Nav.Link>
            {
              user && <><Nav.Link as={Link} to="/inventorManage">inventor manage</Nav.Link>
              <Nav.Link as={Link} to="/addItem">add item</Nav.Link>
              <Nav.Link as={Link} to="/myItem">my item</Nav.Link></> 
            }
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
          {user ? <button style={{border:'none',backgroundColor:'transparent',color:'GrayText'}} onClick={handleSignOut}>Sign Out</button>
      :<Nav.Link as={Link} to="/login">
        LogIn
      </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
