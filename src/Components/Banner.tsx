import React from 'react';
import {Container,Image , Row } from 'react-bootstrap';
import Banner_IMG from '../assets/images/Bannner_Img.webp';
import Leaf_IMG from '../assets/images/double_leaf.webp';



const Banner: React.FC = () => {
    return (
        <Container fluid={true} >
           <Row >
               <div className='parent mt-3 mx-0 p-0 mb-0'> 
                   <Image className='one p-0 m-0' src={Banner_IMG} alt="Banner" />
                   <Image className='two' src={Leaf_IMG} alt="Leaf" /> 
                   <h4 className='three'>100% Healthy & Affordable</h4>
                   <h1 className='four'>organic Vegitables</h1>
                   <h4 className='five'>Small Charges Big Different</h4>
                   <div className='bg-white'>
                   <button className='shopbutton'>Shop Now</button>  
                   </div>
               </div>
           </Row>
        </Container>


    )
};
export default Banner;