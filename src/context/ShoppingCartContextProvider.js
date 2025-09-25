import { createContext, useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/shopping_cart_reducer/shoppingCartInitialState";
import { shoppingReducer } from "@/shopping_cart_reducer/shoppingCartReducer";
import { TYPES } from "@/shopping_cart_reducer/shoppingCartActions";
import axios from "axios";

export const ShoppingCartContext = createContext(); 

const ShoppingCartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const readState = async () => {
      const ENDPOINTS = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart"
      }
      const productsResponse = await axios.get(ENDPOINTS.products),
        cartResponse = await axios.get(ENDPOINTS.cart);
      
      const products = productsResponse.data,
        cart = cartResponse.data;

      dispatch({type: TYPES.READ_STATE, payload: {products, cart}});
    }

    useEffect(() => {
      readState()
    }, [])
    

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id}) // add to cart

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id})
      } else {
        dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id})
      }
    }

    const clearCart = () => dispatch({type: TYPES.CLEAR_CART}) // clear cart

  return (
    <ShoppingCartContext.Provider value={{state, addToCart, deleteFromCart, clearCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider