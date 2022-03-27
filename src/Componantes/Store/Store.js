import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);
    return (
        <div className='store'>
            <div className='products'>
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        ></Product>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;