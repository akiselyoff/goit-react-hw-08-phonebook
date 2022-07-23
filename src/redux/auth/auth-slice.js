import { createSlice } from '@reduxjs/toolkit';
import authOperation from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {},
  },
});
