const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.item.id === action.payload;
      });
      state.cartItems[itemIndex].id = 'm';
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== 'm'),
      };
    case 'SET_CLIENT_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
