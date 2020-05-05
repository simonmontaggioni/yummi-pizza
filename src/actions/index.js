export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});
export const setClientData = (payload) => ({
  type: 'SET_CLIENT_DATA',
  payload,
});
export const changeCoinType = (payload) => ({
  type: 'CHANGE_COIN_TYPE',
  payload,
});
