import React, { useContext, useEffect } from 'react';
import './CartItems.css';
import { ShopContext } from './../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartItemQuantity } = useContext(ShopContext);

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity >= 0) {
      updateCartItemQuantity(itemId, quantity);
    }
  };

  // Monitorowanie zmian w cartItems
  useEffect(() => {
    // Działa, gdy cartItems zostanie zaktualizowane
  }, [cartItems]);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Size</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product && all_product.map((e) => {
        if (cartItems[e.id]?.quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={require(`../Assets/Products/${e.images[0]}`)} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}€</p>
                <input
                  type="number"
                  className='cartitems-quantity'
                  value={cartItems[e.id]?.quantity}
                  onChange={(event) => handleQuantityChange(e.id, parseInt(event.target.value))}
                />
                <p>{e.new_price * cartItems[e.id].quantity}€</p>
                <p>{cartItems[e.id].size}</p>
                <img src={remove_icon} className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}€</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()}€</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here:</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;