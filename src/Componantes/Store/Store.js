import React, { createElement, useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const cartSelected =(product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const removeAll = ()=>{
        const removeCart = [];
        setCart(removeCart);
    }
    
    return (
        <div className='store'>
            <div className='products'>
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        cartSelected={cartSelected}
                        ></Product>)
                }
            </div>
            <div className='cartContainer'>
                <div className='cart'>
                    <h2>Cart Box</h2>
                    
                    {cart.map((item) => (
                        <Cart cart={item}></Cart>
                    ))}

                    <button className='remove-button' onClick={()=>removeAll()}>Remove All</button>
             </div>   
            </div>
        </div>
    );
};

export default Store;