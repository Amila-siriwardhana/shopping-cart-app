import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Search } from 'react-feather';

const SearchBar: React.FC = () => {
    return (
            <Row >
                <div className='containerbox'>
                <div className='searchbar p-0 m-0'>
            <Search className='searchbutton'/>
            <input placeholder='Search' className='inputfield'></input>
            </div>
                </div>
            
            </Row>
    )
};
export default SearchBar;