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


return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartMessage, setCartMessage }}>
        {children}
    </CartContext.Provider>
);
}


export default CartProvider;