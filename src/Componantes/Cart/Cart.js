import React from 'react';
import './Cart.css'

const Cart = ({cart,removeItem}) => {
    const {img, name} = cart;

    
    return (
        <div className='cart'>
            <div className='cart-items'>
              <img src={img} alt="" />
              <h4>{name}</h4>
              <button onClick={()=> removeItem(cart)} >x</button> 
            </div>
        </div>
    );
};

export default Cart;