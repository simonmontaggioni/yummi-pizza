const BASE_URL = 'http://localhost:3001';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const Api = {
  users: {
    list() {
      return callApi('/users');
    },
    create(user) {
      return callApi(`/users`, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    },
    read(userId) {
      return callApi(`/users/${userId}`);
    },
    update(userId, updates) {
      return callApi(`/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(userId) {
      return callApi(`/users/${userId}`, {
        method: 'DELETE',
      });
    },
    async loginRequest(userName, password) {
      const users = await callApi('/users');
      const user = users.find(
        (user) => user.userName === userName && user.password === password
      );
      return user;
    },
  },
  products: {
    list() {
      return callApi('/products');
    },
    create(product) {
      return callApi(`/products`, {
        method: 'POST',
        body: JSON.stringify(product),
      });
    },
    read(productId) {
      return callApi(`/products/${productId}`);
    },
    update(productId, updates) {
      return callApi(`/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(productId) {
      return callApi(`/products/${productId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default Api;
