import React, { useContext, useState } from 'react'
import { urlFor } from '../../../lib/client'
import {AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar} from 'react-icons/ai';
import { useProducts } from '../../hooks';
import { Product } from '../../components';
import { StateContext } from '../../context/StateContext';
import { useEffect } from 'react';

export const ProductDetails = ({product}) => {

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log('me dispare');
  }

  const {showCart, cartItems, totalPrice, totalQuantities, quantity, incQuantity, decQuantity, onAdd} = useContext(StateContext);

  const {products} = useProducts();
  const [index, setIndex] = useState(0);

  const {image, name, details, price} = product;

  useEffect(() => {
    topFunction();
  
  }, );
  

  return (
    <div className="product-detail-container">
      <div className='product-template'>
          <img 
            src={urlFor(image && image[index])} 
            className="product-detail-image"
            />
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
          </div>
          <p>(20)</p>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price} USD</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQuantity}><AiOutlineMinus/></span>
              <span className="num">{quantity}</span>
              <span className="plus" onClick={incQuantity}><AiOutlinePlus/></span>
            </p>
          </div>  
          <div className="buttons">
            <button type='button' className="add-to-cart" onClick={() => onAdd(product, quantity)}>Add to cart</button>
            <button type='button' className="buy-now" onClick=''>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="small-images-container">
          {image?.map((item, i) => (
            <img 
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
              />
          ))}

        </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products && products.map((item) => (
              <Product key={item._id} product={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
