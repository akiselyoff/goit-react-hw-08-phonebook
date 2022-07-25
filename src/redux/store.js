import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../API/contactsApi';
import filter from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
