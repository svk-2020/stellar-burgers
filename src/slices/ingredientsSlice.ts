import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

interface IngredientState {
  ingredients: TIngredient[];
}

const initialState: IngredientState = {
  ingredients: []
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {}
});

export const ingredientsReducer = ingredientsSlice.reducer;
