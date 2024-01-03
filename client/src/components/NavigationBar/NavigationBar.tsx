import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PiCookingPotFill } from "react-icons/pi";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import  Button from "react-bootstrap/Button";
import { useGetUserID } from "../../hooks/useGetUserID";

const NavigationBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()
  const userID = useGetUserID()

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID")
    navigate("/");
    window.location.reload()
  }
  return (
    <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" className="appfont">
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
            {!userID ? null : <Nav.Link as={NavLink} to={"/savedrecipes"}>
              Saved Recipes
            </Nav.Link>}
            {!cookies.access_token ?  <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={"/login"}>Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={"/register"}>Register</NavDropdown.Item>
            </NavDropdown> : <Button onClick={logout} className="bg-danger border-dark">Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
