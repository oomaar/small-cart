import { combineReducers } from "redux";
import { shopReducer } from "./shopping/shoppingReducers";

export const rootReducer = combineReducers({
    shop: shopReducer
});