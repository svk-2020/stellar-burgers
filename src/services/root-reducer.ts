import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from '../slices/ingredientsSlice';
import { constructorBurgersReducer } from '../slices/constructorSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurgers: constructorBurgersReducer
});
