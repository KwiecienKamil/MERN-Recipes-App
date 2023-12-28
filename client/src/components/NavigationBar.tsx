import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import { PiCookingPotFill } from "react-icons/pi";

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
      <PiCookingPotFill />
        Logo
      </Navbar.Brand>
      <Nav className="ms-auto ">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/auth">Auth</Nav.Link>
        <Nav.Link href="/createrecipe">Create</Nav.Link>
        <Nav.Link href="/savedrecipes">Saved</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
