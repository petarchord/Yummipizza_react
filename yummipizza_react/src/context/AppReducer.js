export default (state, action) => {
  switch (action.type) {
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
    case "REMOVE_ORDER_ITEM":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
        bill: state.bill - action.payload.price * action.payload.quantity,
      };
    default:
      return state;
  }
};
