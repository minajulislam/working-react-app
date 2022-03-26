import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    // console.log(cart);
    
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Item:{cart.length}</p>
        
            <div className="button">
               
                <div>
                    <button>CHOOSE 1 FOR ME</button> 
                </div>
                <div>
                    <button>CHOOSE AGAIN</button> 
                </div>  
            </div>        
                      

        </div>
    );
};

export default Cart;