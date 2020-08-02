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
    default:
      return state;
  }
};
