import React from 'react';
import {Col , Row , Image} from 'react-bootstrap';
import All  from '../assets/images/categories_image/All.webp';
import Grocery  from '../assets/images/categories_image/Electronics.webp';
import Pharmacy  from '../assets/images/categories_image/Pharmacy.webp';
import Food  from '../assets/images/categories_image/Food.webp';
import Electronics  from '../assets/images/categories_image/Electronics.webp';




const Products: React.FC = () => {
    return (
           <Row >
               <Row>
               <div> 
                <h1 className='producttitle'>Demo Products</h1>
               </div>
               </Row>
               <Row className=' row1 mx-3 mt-4'>
                   <Col lg={2} className='col1' >
                    <div className='set1'>
                    <Image className='allimage' src={All} alt="All Products" />
                    <p className='productsname mt-3'>All</p>
                    </div>
                   </Col>
                   <Col lg={2} className='col1' >
                    <div className='set1'>
                    <Image className='allimage' src={Grocery} alt="All Products" />
                    <p className='productsname mt-3'>Grocery</p>
                    </div>
                   </Col>
                   <Col lg={2} className='col1' >
                    <div className='set1'>
                    <Image className='allimage' src={Pharmacy} alt="All Products" />
                    <p className='productsname mt-3'>Pharmacy</p>
                    </div>
                   </Col>
                   <Col lg={2} className='col1' >
                    <div className='set1'>
                    <Image className='allimage' src={Food} alt="All Products" />
                    <p className='productsname mt-3'>Food</p>
                    </div>
                   </Col>
                   <Col lg={2} className='col1' >
                    <div className='set1'>
                    <Image className='allimage' src={Electronics} alt="All Products" />
                    <p className='productsname mt-3'>Electronics</p>
                    </div>
                   </Col>
                   
               </Row>
               
           </Row>


    )
};
export default Products;