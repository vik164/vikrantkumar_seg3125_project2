
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavigationBar = () => {
    return (  
        <Navbar bg="dark" expand="md">
        <Container md style={{padding: 10, fontFamily:'serif'}}>
            <Navbar.Brand href="/Home" style={{fontSize:'xx-large', color:"white",}}>
                Exotic Drives
                
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1 pe-5" style={{fontSize:'x-large'}}>
                    <Nav.Link href="/Home" style={{color: 'white'}} >Home</Nav.Link>
                    <Nav.Link href="/Services" style={{color: 'white'}} >Services</Nav.Link>
                    <Nav.Link href="/Vehicles" style={{color: 'white'}} >Vehicles</Nav.Link>
                    <Nav.Link href="/Contact" style={{color: 'white'}} >Contact Us</Nav.Link>
                    <Nav.Link href="/Reserve" style={{color: 'white', backgroundColor:"#0d6efd", borderRadius:"8px"}} >Reserve</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>


    );
}
 
export default NavigationBar;