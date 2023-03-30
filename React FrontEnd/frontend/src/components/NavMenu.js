import {Container, Nav, Navbar} from "react-bootstrap";
import '../css/NavMenu.css'
import MikuIcon from "../img/mikuIcon.png"

function NavMenu() {
    return (
        <Navbar bg="info" variant="light" expand="md">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt="An miku icon"
                        src={MikuIcon}
                        width="30px"
                        height="30px"
                        className="d-inline-block align-top"
                    />{' '}
                    Project Diva Libary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="/Overview">Song List Overview</Nav.Link>
                        <Nav.Link href="#">Personal tracker</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Language you can switch to: <Nav.Link className="navbarA">JP</Nav.Link> Your currently are on <span className="tell">EN</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu;

/*
 <Navbar bg="info" variant="white" sticky="top">
            <Container>
                <Navbar.Brand href="#">Project Diva Library</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Library</Nav.Link>
                    <Nav.Link href="#">Personal progress</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Language you can switch to: <a className="navbarA">JP</a> Your currently are on <span className="tell">EN</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
 */