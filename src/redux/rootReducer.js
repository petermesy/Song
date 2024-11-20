import { combineReducers } from "redux";

import {cartData} from "./reducer"
import {productData} from "./songReducer"
import {audioReducer} from './audioReducer'
export default combineReducers({
    cartData,
    productData,
    audioReducer
})

