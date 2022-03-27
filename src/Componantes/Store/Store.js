import React, {useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [random , setRandom] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const cartSelected =(product)=>{
        const newCart = [...cart, product]
        
        setCart(newCart)
        
        
        
    }

    const randombutton = (products)=>{
        const removeCart = [];
        const productItem = [];
        for(const product of products){
            productItem.push(product);
        }
        const random = Math.floor(Math.random() * productItem.length);
        const newCart = [productItem[random]]
        setCart(removeCart);
        setRandom(newCart)
        console.log(productItem)
    }
    


    const removeAll = ()=>{
        const removeCart = [];
        setCart(removeCart);
        setRandom(removeCart);
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
                        <Cart key={item.id} cart={item}></Cart>
                    ))}
                    {random.map((item) => (
                        <Cart key={item.id} cart={item}></Cart>
                    ))}
                    

                    <div className='cart-button'>
                        <button className='random-button' onClick={()=>randombutton(cart)}>Choose for me</button>
                        <button className='remove-button' onClick={()=>removeAll()}>Remove All</button>
                    </div>
             </div>   
            </div>
        </div>
    );
};

export default Store;