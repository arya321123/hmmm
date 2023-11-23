/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {createContext, useContext, useReducer} from 'react';

// Define the initial state
const initialState = {
  purchaseHistory: [],
};

// Define the context
const PurchaseContext = createContext();

// Define actions
const actionTypes = {
  ADD_TO_PURCHASE_HISTORY: 'ADD_TO_PURCHASE_HISTORY',
  CLEAR_PURCHASE_HISTORY: 'CLEAR_PURCHASE_HISTORY',
};

// Define the reducer
const purchaseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_PURCHASE_HISTORY:
      return {
        ...state,
        purchaseHistory: [...state.purchaseHistory, action.payload],
      };
    case actionTypes.CLEAR_PURCHASE_HISTORY:
      return {
        ...state,
        purchaseHistory: [],
      };
    default:
      return state;
  }
};

// Define the provider
const PurchaseProvider = ({children}) => {
  const [state, dispatch] = useReducer(purchaseReducer, initialState);

  // Define actions to dispatch
  const addToPurchaseHistory = (purchase) => {
    dispatch({type: actionTypes.ADD_TO_PURCHASE_HISTORY, payload: purchase});
  };

  const clearPurchaseHistory = () => {
    dispatch({type: actionTypes.CLEAR_PURCHASE_HISTORY});
  };

  // Expose the state and actions to the components
  const value = {
    purchaseHistory: state.purchaseHistory,
    addToPurchaseHistory,
    clearPurchaseHistory,
  };

  return <PurchaseContext.Provider value={value}>{children}</PurchaseContext.Provider>;
};

// Create a hook for using the PurchaseContext
const usePurchaseContext = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error('usePurchaseContext must be used within a PurchaseProvider');
  }
  return context;
};

export {PurchaseProvider, usePurchaseContext};
