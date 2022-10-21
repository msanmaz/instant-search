// store/categorySlice.js

import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getCountry = createAsyncThunk(
    'countrySlice/getCountry',
    async () => {
      return await fetch('https://restcountries.com/v3.1/all').
        then(res => res.json());
    }
  );

  

const initialState = {
    countries: [],
    singleProduct:[],
    status:'idle',
    error:null,
}

const countrySlice = createSlice({
    name: 'countrySlice',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.countries = action.payload
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return state = {
                ...state,
                ...action.payload.countrySlice
            };
        },
        [getCountry.pending]:(state,action)=>{
            state.status='loading';
        },
        [getCountry.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.countries = action.payload
          },
      
          [getCountry.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          }
    },
});


export const { setProducts } = countrySlice.actions;
export default countrySlice.reducer;