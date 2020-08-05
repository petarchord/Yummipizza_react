import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intital state

const initialState = {
  bill: 0,
  order: [],
};

//create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function increaseBill(price) {
    dispatch({
      type: "INCREASE_BILL",
      payload: price,
    });
  }

  function addOrderItem(item) {
    dispatch({
      type: "ADD_ORDER_ITEM",
      payload: item,
    });
  }

  function removeOrderItem(item) {
    dispatch({
      type: "REMOVE_ORDER_ITEM",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        bill: state.bill,
        order: state.order,
        increaseBill,
        addOrderItem,
        removeOrderItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
