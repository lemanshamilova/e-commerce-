import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 product:[],
 selectedProduct:{}
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
 
  },
  extraReducers:(builder)=>{
    
  }
})

export const {  } = appSlice.actions

export default appSlice.reducer