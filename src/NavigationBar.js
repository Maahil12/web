import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" className="font">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <b style={{ fontSize: "1.3rem" }}>Metx</b>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavItem href="/home">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem href="/setup">
              <Nav.Link as={Link} to="/setup">
                Setup
              </Nav.Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem href="https://youtu.be/U-l4ya3ejko?si=2BmEysG7xMa3bG5e&t=75">
              <Nav.Link
                href="https://youtu.be/U-l4ya3ejko?si=2BmEysG7xMa3bG5e&t=75"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fe!n
              </Nav.Link>
            </NavItem>
            <NavItem href="https://youtu.be/pildU9lK6vM?si=eJ671qx7PVdniwIQ&t=174">
              <Nav.Link
                href="https://youtu.be/pildU9lK6vM?si=eJ671qx7PVdniwIQ&t=174"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Eyes
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
