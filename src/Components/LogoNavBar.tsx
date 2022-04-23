import React from 'react';
import {  Col, Image , Container, Row } from 'react-bootstrap';
import { ShoppingCart } from 'react-feather';
import Logo from '../assets/images/LogoSparks.webp';


const LogoNavBar: React.FC = () => {
    return (
            <div className='logonavbar'>
            <Row className=" align-middle  my-2 ">
                <Col lg={8} >
                <div className="logobar d-flex align-items-start">
                    <Image src={Logo} alt='LOGO' className='logoimage'/>
                </div>  
                </Col>
                <Col lg={2} className="p-0">
                    <div className="d-flex align-items-center h-100 justify-content-end">
                    <ShoppingCart className="cart "/> 
                    </div>
                </Col>
                <Col lg={2}className="p-0">
                <div className="d-flex align-items-center h-100 justify-content-start ms-3  ">  
                <button className="checkbutton">Checkout</button>
                </div>
                </Col>
            </Row> 
            </div>
    );
}

export default LogoNavBar;