import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';

import {TiDeleteOutline} from 'react-icons/ti';
import { toast } from 'react-hot-toast';
import { urlFor } from '../../lib/client';
import {StateContext} from '../context/StateContext';
import { getStripe } from '../../lib/getStripe';
import ecommerceApi from '../api/ecommerceApi';


export const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useContext(StateContext);

  const handleCheckout = async() => {
    const stripe = await getStripe();

    const resp = await ecommerceApi.post('/', {cartItems});
    console.log(resp);
    // if(response.statusCode === 500) return;

    // const data = await response.json();

    // toast.loading('Redireccionando...');
    // stripe.redirectToCheckout()
    // stripe.redirectToCheckout({sessionId: data.id});
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineRight/>
          <span className='heading'>Your cart</span>
          <span className='cart-num-item  s'>({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link to='/'>
              <button type='button' onClick={() => setShowCart(false)} className='btn'>
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                      <span className="num">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                    </p>
                  </div>
                  <button className="remove-item" type='button' onClick={() => onRemove(item)}><TiDeleteOutline/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal: </h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button className="btn" type='button' onClick={handleCheckout}>
                  Pay with Stripe
                </button>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}
