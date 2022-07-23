import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const authOperation = {
  register,
  logIn,
};

export default authOperation;
