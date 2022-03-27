import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {img, name, price} = cart;
    console.log(cart[0]);
    return (
        <div className='cart'>
            <div className='cart-items'>
              <img src={img} alt="" />
              <h4>{name}</h4>  
            </div> 
        </div>
    );
};

export default Cart;