import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import countrySlice from '../slice/countrySlice';


const makeStore = () => {
  let store = configureStore({ 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
    reducer: {
        countrySlice: countrySlice,
    }
  });

  return store;
}

export const wrapper = createWrapper(makeStore);