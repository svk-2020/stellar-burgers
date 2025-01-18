import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorBurgersReducer } from './slices/constructorSlice';
import { feedReducer } from './slices/feedSlice';
import { orderReducer } from './slices/orderSlice';
import { userReducer } from './slices/userSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurgers: constructorBurgersReducer,
  feed: feedReducer,
  order: orderReducer,
  user: userReducer
});
