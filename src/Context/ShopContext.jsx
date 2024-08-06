import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch('https://13.60.170.233:22/allproducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched products:', data);
        setAll_product(data);
      })
      .catch((error) => console.error('Error fetching products:', error));

    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://13.60.170.233:22/getcart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched cart items:', data);
          const formattedCartItems = {};
          Object.entries(data).forEach(([itemId, quantity]) => {
            formattedCartItems[itemId] = {
              quantity,
              size: null
            };
          });
          setCartItems(formattedCartItems);
        })
        .catch((error) => console.error('Error fetching cart items:', error));
    }
  }, []);

  const addToCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: (prev[itemId]?.quantity || 0) + 1,
        size: size || prev[itemId]?.size,
      }
    }));

    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://13.60.170.233:22/addtocart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId, size }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((data) => console.log('Add to cart response:', data))
        .catch((error) => console.error('Error adding to cart:', error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId]; // Całkowite usunięcie przedmiotu z koszyka
      return updatedCart;
    });

    const token = localStorage.getItem('auth-token');
    if (token) {
      fetch('https://13.60.170.233:22/removefromcart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Odpowiedź jako tekst
        })
        .then((data) => console.log('Remove from cart response:', data))
        .catch((error) => console.error('Error removing from cart:', error));
    }
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: quantity,
      }
    }));
    // Możesz tutaj dodać żądanie do serwera, aby zaktualizować ilość w bazie danych
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item].quantity;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalItem += cartItems[item].quantity;
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;