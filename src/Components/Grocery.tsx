import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Coconut from '../assets/images/grocery_images/coconut.jpeg'
import Garlic from '../assets/images/grocery_images/garlic.jpeg'
import Onions from '../assets/images/grocery_images/onions.jpeg'
import Milk from '../assets/images/grocery_images/milk.jpeg'
import Noodles from '../assets/images/grocery_images/noodles.jpeg'
import Cinnamon from '../assets/images/grocery_images/cinnamon.jpeg'
import Chili from '../assets/images/grocery_images/chili powder.jpeg'
import Biscuits from '../assets/images/grocery_images/biscuits.jpeg'

const Grocery: React.FC = () => {
    const imagearray = [
        { "image": Coconut, "Name": "coconut", "old_price": 900, "new_price": 100 },
        { "image": Garlic, "Name": "garlic", "old_price": 70, "new_price": 100 },
        { "image": Onions, "Name": "Onions", "old_price": 70, "new_price": 100 },
        { "image": Milk, "Name": "Milk", "old_price": 70, "new_price": 100 },
        { "image": Noodles, "Name": "Noodles", "old_price": 70, "new_price": 100 },
        { "image": Cinnamon, "Name": "Cinnamon", "old_price": 70, "new_price": 100 },
        { "image": Chili, "Name": "Chili", "old_price": 70, "new_price": 100 },
        { "image": Biscuits, "Name": "Biscuits", "old_price": 70, "new_price": 100 },
    ];

    const set = imagearray.map(x => {
        return x;
    })
    console.log(set);

    return (
        <Row lg={12} className="fullrow mb-5">
            <div className='total'>
                {/* <Row >
                    <div className='title'>
                        Grocery
                    </div>
                </Row> */}
								<div className='itemscontainer'>
								<Row className='itemsrow'>
                    {imagearray.map(x =>
                        <Col lg={3} className="itemcolumn">
                            <div className='item'>
                                <Image src={x.image} alt="Coconut" className='image' />
                                <div className='itemname'>
                                    <h5>{x.Name}</h5>
                                </div>
                                <div>
                                    <Row>
                                        <Col>
                                            <p className='oldprice'>{x.old_price}</p>
                                        </Col>
                                        <Col>
                                            <h5 className='newprice'>Rs.{x.new_price}.00</h5>
                                        </Col>
                                    </Row>

                                </div>
                                <div>
                                    <Row>
                                        <Col lg={5}>
                                            <input className='inputfield2'></input>
                                        </Col>
                                        <Col lg={7}>
                                            <button className='addcartbutton'>Add To Cart</button>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
								</div>
                
            </div>

        </Row>

    )
};
export default Grocery;