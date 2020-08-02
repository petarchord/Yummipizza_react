import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intital state

const initialState = {
  menu: [
    {
      id: 1,
      name: "Capricoza",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      quantity: 1,
    },
    {
      id: 3,
      name: "Quatro",
      price: 10,
      quantity: 1,
    },
    {
      id: 4,
      name: "Napolitana",
      price: 10,
      quantity: 1,
    },
  ],
  bill: 0,
};

//create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function incrementQuantity(id) {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: id,
    });
  }

  function decrementQuantity(id) {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: id,
    });
  }

  function increaseBill(price) {
    dispatch({
      type: "INCREASE_BILL",
      payload: price,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        menu: state.menu,
        bill: state.bill,
        incrementQuantity,
        decrementQuantity,
        increaseBill,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};