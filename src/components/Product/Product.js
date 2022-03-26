import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const product = (props) => {
    const {product, handleAddToCart} = props
    // const {handleAddToCart} = props;
    const {productName, img, price,code, brand} = props.product
     
    return (
        <div className='product'>
             <img src={img} alt=""></img>
             <div className='body-info'>
             <h3>Name:{productName}</h3>
             <h3>Price:{price}</h3>
             <h3>Code:{code}</h3>
             <h3>Brand:{brand}</h3><br></br>
             </div> 
             
             <button onClick={() =>handleAddToCart(product)} className="btn-cart">
                 <p className="btn-text">Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    ); 
};

export default product;