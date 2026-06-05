// Creates and manages the global cart state used across the application. 
// Provides functions to add, remove, and clear items from the cart, as well as a message for cart actions.

import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
const [cart, setCart] = useState([]);
const [cartMessage, setCartMessage] = useState("");

function addToCart(cat) {
    setCart(currentCart => {
        const exists = currentCart.find(item => item.id === cat.id);

        if (exists) {
            setCartMessage(`${cat.name} already exists in your cart!`);
            return currentCart;
        }

        setCartMessage(`Added ${cat.name} to cart!`);
        return [...currentCart, cat];
    });
}

function removeFromCart(catId) {
    setCart(currentCart => currentCart.filter(cat => cat.id !== catId));
        setCartMessage(`Removed item from cart!`);
        return currentCart;
    }

function clearCart() {
    setCart([]);
}

// Makes cart data and functions available to all components wrapped by CartProvider.
return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartMessage, setCartMessage, clearCart }}>
        {children}
    </CartContext.Provider>
);
}


export default CartProvider;