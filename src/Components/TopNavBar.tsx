import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-feather';



const TopNavBar: React.FC = () => {
    return (
        <Container fluid={true} className="py-0 my-0">
            <div className="topnavbar d-flex justify-content-end py-0 my-0">
            <Navbar >
               <Navbar.Collapse >
                   <Nav >  
                       <Nav.Link className="phone me-5 p-0" >
                           <Icon.PhoneCall className="me-2"/>
                           0765280314
                       </Nav.Link>
                       <Nav.Link className="truck me-5 p-0">
                           < Icon.Truck className="me-2"/>
                           Delivery Areas
                       </Nav.Link>
                       <Nav.Link className="user me-5 p-0">
                           < Icon.User className="me-2"/>
                           My Account
                       </Nav.Link>
                       <Nav.Link className="register mx-1 p-0">
                           <button className="login">Register</button>
                       </Nav.Link>
                       <Nav.Link className="me-0 p-0">
                           <button className="login">Login</button>
                       </Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
            </div>
        </Container>


    )
};
export default TopNavBar;