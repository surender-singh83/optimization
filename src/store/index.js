import { createStore, combineReducers, applyMiddleware } from "redux";
import {searchReducers} from './reducer'
import thunk from "redux-thunk";
import logger from "redux-logger";

const allReducers = combineReducers({
    searchReducers
})
export const store = createStore(allReducers, applyMiddleware(thunk, logger))