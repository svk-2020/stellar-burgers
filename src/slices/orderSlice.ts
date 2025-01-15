import { TOrder } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrderByNumberApi, getOrdersApi } from '@api';

interface OrderState {
  ordersList: TOrder[];
  orderData: TOrder | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  ordersList: [],
  orderData: null,
  loading: false,
  error: null
};

export const getOrders = createAsyncThunk(
  'order/getOrders',
  async () => await getOrdersApi()
);

export const getOrderData = createAsyncThunk(
  'order/getOrderData',
  async (number: number) => await getOrderByNumberApi(number)
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  selectors: {
    selectOrderData: (state) => state.orderData
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.ordersList = action.payload;
      })
      .addCase(getOrderData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(getOrderData.fulfilled, (state, action) => {
        state.loading = false;
        state.orderData = action.payload.orders[0];
      });
  }
});

export const { selectOrderData } = orderSlice.selectors;
export const orderReducer = orderSlice.reducer;
