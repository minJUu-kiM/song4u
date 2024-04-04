import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/NavbarMenu.css';


const NavbarMenu = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <div className='NavbarMenu-logo'>
          <Container>
            <div className='Con'>
              <div className='Choice1'>
                <Nav.Link href="About">About Us</Nav.Link>
              </div>
              <div className='Choice2'>
                <Nav.Link href="Genre">Genre</Nav.Link>
              </div>
              <div className='Home'>
                <Nav.Link href="/">Song4U</Nav.Link>
              </div>
              <div className='Choice3'>
                <Nav.Link href="Generation">Generation</Nav.Link>
              </div>
              <div className='Choice4'>
                <Nav.Link href="Situation">Situation</Nav.Link>
              </div>
            </div>
          </Container>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarMenu;