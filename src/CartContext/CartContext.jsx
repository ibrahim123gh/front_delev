import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      const { item, quantity } = action.payload;
      let existingItem = state.find((ci) => ci.id === item.id);
      if (existingItem) {
        return state.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...state, { ...item, quantity }];
    }
    case "REMOVE_ITEM": {
      return state.filter((ci) => ci.id !== action.payload.itemId);
    }
    case "UPDATE_QUANTITY": {
      const { itemId, newQuantity } = action.payload;
      return state.map((ci) =>
        ci.id === itemId ? { ...ci, quantity: Math.max(1, newQuantity) } : ci
      );
    }
    default: {
      return state;
    }
  }
};

const initializer = () => {
  if (typeof window === "undefined") {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  }
  return [];
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //calculate totale cost and totale item count
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const formatTotalItems = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  const addToCart = useCallback((item, quantity) => {
    dispatch({ type: "ADD_ITEMS", payload: { item, quantity } });
  }, []);

  const remaveToCart = useCallback((itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { itemId } });
  }, []);

  const UpdateToCart = useCallback((itemId, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, newQuantity } });
  }, []);
  const value = {
    cartItems,
    addToCart,
    remaveToCart,
    UpdateToCart,
    totalItems: formatTotalItems(totalItemsCount),
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
