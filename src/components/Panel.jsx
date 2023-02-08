import React, { useContext } from 'react';
import {AiOutlineShopping} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/StateContext';
import { Cart } from './Cart';


export const Panel = () => {

  const {showCart, setShowCart, totalQuantities} = useContext(StateContext);

  return (
    <div className="panel-container">
      <p className='logo'>
        <Link to={"/"}>Sports Shop</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart/>}
    </div>
  )
}
