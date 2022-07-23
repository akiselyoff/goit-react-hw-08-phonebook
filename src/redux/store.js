import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../API/contactsApi';
import filter from './contacts/contacts-slice';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
