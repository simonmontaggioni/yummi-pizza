const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload;
      });
      const newArray = JSON.parse(JSON.stringify(state.cartItems));
      newArray[itemIndex].id = 'm';
      return {
        ...state,
        cartItems: newArray.filter((item) => item.id !== 'm'),
      };
    case 'SET_CLIENT_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'CHANGE_COIN_TYPE':
      const coinType = action.payload;
      return {
        ...state,
        coinType: coinType,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        userData: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        userData: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
