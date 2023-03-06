import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./suunto_transparent.png";

function NavBar() {
  return (
    <Navbar bg="white">
      <Container className="py-2">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="90"
            height="30"
            className="d-inline-block align-top ms-4"
            alt="suunto logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
