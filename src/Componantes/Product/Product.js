import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const { name, img, price } = product;
    return (
        <div className='product-item'>
            <div className='product-info'>
                <img src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;