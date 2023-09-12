import {applyMiddleware, combineReducers, createStore,compose} from "redux" 
import thunk from "redux-thunk"

import { cartReducer } from "./Products/cartReducer"
import { catReducer } from "./Products/catReducer"
import { currentCatReducer } from "./Products/currentCategory"
import { pReducer } from "./Products/pReducer"
import { searchReducer } from "./Products/searchReducer"

import { AuthReducer } from "./Login/reducer"

import { singleProductReducer } from "./SingleProduct/reducer"


export const rootReducer = combineReducers({
   Auth:AuthReducer,
   state:pReducer,
   categories:catReducer,
   currentCat:currentCatReducer,

   searchResults:searchReducer,
   cart:cartReducer,


   singleProduct:singleProductReducer,

})


const composeEnhancers = (typeof window !== 'undefined' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const enhancer = composeEnhancers(applyMiddleware(thunk))   

export const store = createStore(rootReducer,enhancer)