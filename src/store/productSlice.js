import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: 'idle'
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload
    // }
  },

  extraReducers: (builder) => {

    builder.addCase(getProducts.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })

    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = 'rejected'
    })
  }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer

export const getProducts = createAsyncThunk('product/get', async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const response = await data.json();
  return response;
})

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const response = await data.json();
//     dispatch(fetchProducts(response))
//   }
// }