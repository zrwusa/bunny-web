'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../grpc/generated/product';

interface ExampleState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: [],
  loading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure } =
  exampleSlice.actions;
export default exampleSlice.reducer;
