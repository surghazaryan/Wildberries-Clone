import { combineReducers } from "redux"
import cartReducer from "./reduser/cartReducer"


const reduser = combineReducers({
    cart:cartReducer
})

export default reduser