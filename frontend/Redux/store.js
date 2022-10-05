import {combineReducers,applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import cartItems from './Reducers/cartItem'

const reducers = combineReducers({
    cartItems:cartItems
    


})

const store = configureStore(
    {reducer:reducers},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;