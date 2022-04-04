import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randoms, setRandom] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const cartSelected = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (!exist) {
            const newCart = [...cart, product]
            setCart(newCart)
        } else {
            alert("ALready added");
        }




    }
    const removeItem = (selectedProduct) => {
        const rest = cart.filter(item => item.id !== selectedProduct.id);
        setCart(rest);
        setRandom(rest)
        console.log(rest)
    }

    const randombutton = (products) => {

        if (cart.length === 0) {
            alert("Choose again");
        } else {
            const removeCart = [];
            const productItem = [];
            for (const product of products) {
                productItem.push(product);
            }
            const random = Math.floor(Math.random() * productItem.length);
            const newCart = [productItem[random]]
            setCart(removeCart);
            setRandom(newCart)
            console.log(cart, randoms);
        }


    }




    const removeAll = () => {
        const removeCart = [];
        setCart(removeCart);
        setRandom(removeCart);
    }

    // conditional rendering 
    let command;

    if (cart.length === 0) {
        command = <p>Please Add Atleast 1 Item</p>
    } else if (cart.length === 1) {
        command = <p>Please Add more</p>
    } else {
        command = <p>Thanks for Adding</p>
    }

    return (
        <div className='store'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        cartSelected={cartSelected}
                    ></Product>)
                }
            </div>
            <div className='cartContainer'>
                <div className='cart'>
                    <h2>Cart Box</h2>

                    {cart.map((carts) => (
                        <Cart key={carts.id} cart={carts} removeItem={removeItem}></Cart>
                    ))}
                    {randoms.map((carts) => (
                        <Cart key={carts.uid} cart={carts} removeItem={removeItem}></Cart>
                    ))}
                    {command}


                    <div className='cart-button'>
                        <button className='random-button' onClick={() => randombutton(cart)}>Choose for me</button>
                        <button className='remove-button' onClick={() => removeAll()}>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;