import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;


    
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price;
        shipping = shipping + product.shipping;   
    }
   
    let tax = parseFloat(((total+shipping)*.01).toFixed(2));
    let grandTotal = total+shipping+tax;



    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>TAX :${tax}</p>
            <h3>Grand Total: ${grandTotal} </h3>
            {/* <button onClick={reset}>Reset</button> */}
            
        </div>
        
    );
};

export default Cart;