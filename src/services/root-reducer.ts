import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from '../slices/ingredientsSlice';
import { constructorBurgersReducer } from '../slices/constructorSlice';
import { feedReducer } from '../slices/feedSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurgers: constructorBurgersReducer,
  feed: feedReducer
});
