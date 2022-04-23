import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const RedirectNavBar: React.FC = () => {
    return (
        <Container fluid={true}>
           <Navbar className="navbar">
               <Navbar.Collapse>
                   <Nav>
                       <NavDropdown title="Categories" className="category px-3">
                           <NavDropdown.Item>
                               Electronics
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                               Foods
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                               Vegitables
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                               Fruits
                           </NavDropdown.Item>
                       </NavDropdown>
                       <Nav.Link className="link mx-2">
                           Home
                       </Nav.Link>
                       <Nav.Link className="link mx-2 p-2">
                           About Us
                       </Nav.Link>
                       <Nav.Link className="link mx-2">
                           FAQ
                       </Nav.Link>
                       <Nav.Link className="pricelink mx-2 px-4 text-danger">
                           <span>
                           Price
                           </span>
                       </Nav.Link>
                       <Nav.Link className="link mx-2">
                           Contact Us
                       </Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
            
            
           
            
        </Container>
       
    );
}

export default RedirectNavBar;