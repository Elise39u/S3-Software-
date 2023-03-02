import {Container, Nav, Navbar} from "react-bootstrap";

function navMenu() {
    return (
        <Navbar bg="info" variant="white" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Project Diva Library</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="">Library</Nav.Link>
                    <Nav.Link href="">Personal progress</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Language you can switch to: <a className="navbarA" href="">JP</a> Your currently are on <span className="tell">EN</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navMenu;
