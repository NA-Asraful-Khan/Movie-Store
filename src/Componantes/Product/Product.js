import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({product,cartSelected}) => {
    const { name, img, price } = product;

    
    return (
        <div className='product-item'>
            <div className='product-info'>
                <img src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>cartSelected(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;