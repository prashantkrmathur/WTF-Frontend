import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "../images/Capture.PNG"
function NavBarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <Nav.Link href="/dashboard">
                            <img style={{ height: '40px'}} src='https://wtfup.me/assets/assets/logo.png' alt='logo'></img>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" style={{marginRight:'20px'}}>Fitness</Nav.Link>
                        <Nav.Link href="#features" style={{ marginRight: '20px' }}>Nutrition</Nav.Link>
                        <Nav.Link href="#pricing" style={{ marginRight: '20px' }}>Gyms</Nav.Link>
                        <Nav.Link href="#home" style={{ marginRight: '20px' }}>Become WTF Partner</Nav.Link>
                        <Nav.Link href="#features" style={{ marginRight: '20px' }}>About us</Nav.Link>
                        <Stack direction="horizontal" gap={2}>
                            <Button as="a" variant="primary">
                               Login
                            </Button>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
            <div><img src={img}></img></div>
        </>
    );
}

export default NavBarComponent;