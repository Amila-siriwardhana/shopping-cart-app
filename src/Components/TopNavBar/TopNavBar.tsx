import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import * as Icon from "react-feather";
import "./PublicNavBar.scss";

import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const TopNavBar: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className="nav-container px-3">
        {/* <Container> */}

        <Navbar.Toggle aria-controls="responsive-" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-md-center">
            <Nav.Link className="d-flex justify-content-md-start mx-2" href="#features">
              <div>
                <Icon.PhoneCall />
                <span className="ms-3">+0765280314</span>
              </div>
            </Nav.Link>
            <Nav.Link className="d-flex justify-content-md-start mx-2" href="#pricing">
              <div>
                <Icon.Truck />
                <span className="ms-3">Delivery Areas</span>
              </div>
            </Nav.Link>
            <Nav.Link className="d-flex justify-content-md-start mx-2" href="#pricing">
              <div>
                <Icon.User />
                <span className="ms-3">My Account</span>
              </div>
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="buttons d-flex justify-content-md-start">
            <button className="log-in-button d-flex justify-content-md-end mx-3 px-4 py-1">Log In</button>
            <button className="sign-in-button d-flex justify-content-md-end px-2 py-1">Sign In</button>
            {/* <Button className="ms-3 me-2 justify-content-end" size="sm" disabled>
              Log In
            </Button>
            <Button className="justify-content-end" href="#" size="sm" disabled>
              Sign In
            </Button> */}
          </div>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
};
export default TopNavBar;
