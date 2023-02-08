import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {StateContext} from './StateContext';

export const StateProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [quantity, setQuantity] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
      const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

      if(checkProductInCart){

        const updatedCartItems = cartItems.map((cartProduct) => {
          if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
        })

        setCartItems(updatedCartItems);
      }
      else {
        product.quantity = quantity;
        
        setCartItems([...cartItems, {...product}]);
      }
      toast.success(`${quantity} added to the cart`);
    }

    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item._id === product._id);
      const newCartItem = cartItems.filter((item) => item._id !==  product._id);

      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price *foundProduct.quantity);
      setTotalQuantities((prevQuantity) => prevQuantity - product.quantity);
      setCartItems(newCartItem);
    }

    const toggleCartItemQuantity = (id, value) => {
      foundProduct = cartItems.find((item) => item._id === id);
      const newCartItem = cartItems.filter((item) => item._id !==  id);

      if(value === 'inc') {
        setCartItems([...newCartItem, {...foundProduct, quantity: foundProduct.quantity +1}]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + 1);
      } else if(value === 'dec'){
        if(foundProduct.quantity > 1){
          setCartItems([...newCartItem, {...foundProduct, quantity: foundProduct.quantity -1}]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
          setTotalQuantities((prevTotalQuantity) => prevTotalQuantity - 1);
        }

      }
    }

    const incQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity+1);
    }

    const decQuantity = () => {
        setQuantity((prevQuantity) =>{
        if (prevQuantity <= 1 ) return 1;     
        
        return prevQuantity-1
        
        });
    }

  return (
    <StateContext.Provider value={{onAdd, onRemove, showCart, cartItems, totalPrice, totalQuantities, quantity, incQuantity, decQuantity, setShowCart, toggleCartItemQuantity}}>
        {children}
    </StateContext.Provider>
  )
}
