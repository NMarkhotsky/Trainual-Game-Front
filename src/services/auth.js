import axios from 'axios';

// import { BASE_URL } from '../constants/globalConstants';

const BASE_URL = 'https://api.trainual-stg.com/backend/v1/';

axios.defaults.baseURL = BASE_URL;

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post('/sessions', credentials);
  authHeader.set(data.token);

  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.delete('/sessions');
  authHeader.unset();

  return data;
};

// export const fetchUserByToken = async (persistedToken) => {
//   authHeader.set(persistedToken);
//   const {
//     data: { user },
//   } = await axios.get('/users');

//   return user;
// };
