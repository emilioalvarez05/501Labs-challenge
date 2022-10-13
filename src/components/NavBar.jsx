import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
