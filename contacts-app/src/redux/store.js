import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {reducer as authReducer} from "./auth/reducer"
import {reducer as contactReducer} from "./contacts/reducer"
import thunk from "redux-thunk"
const rootReducer=combineReducers({
    authReducer,
    contactReducer
})


export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))