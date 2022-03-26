import React from 'react';
import './Product.css';

const product = (props) => {
    const {productName, img, price,code, brand} = props.product
    return (
        <div className='product'>
             <img src={img} alt=""></img> 
             <h3>Name:{productName}</h3>
             <h3>Price:{price}</h3>
             <h3>Code:{code}</h3>
             <h3>Brand:{brand}</h3>
        </div>
    );
};

export default product;