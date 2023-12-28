import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PiCookingPotFill } from "react-icons/pi";
import "../../index.css";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="appfont">
      <Container>
        <Navbar.Brand href="/" className="fs-4 text-success fw-bold bg-light rounded-pill px-2" >
          <PiCookingPotFill className="fs-3 mb-1" />
          Foodie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ms-auto fs-6">
            <Nav.Link as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/createrecipe"}>
              Create Recipe
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/savedrecipes"}>
              Saved Recipes
            </Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={"/login"}>Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={"/register"}>Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
