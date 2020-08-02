export default (state, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        menu: state.menu.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        menu: state.menu.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        }),
      };

    case "INCREASE_BILL":
      return {
        ...state,
        bill: state.bill + action.payload,
      };
    case "ADD_ORDER_ITEM":
      return {
        ...state,
        order: [action.payload, ...state.order],
      };
    default:
      return state;
  }
};
