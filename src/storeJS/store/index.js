import { createStore,combineReducers } from "redux";
import {radioReducer,displayOptButtonReducer,displayOptCheckReducer} from "../reducers/index";

const reducers = combineReducers({
    radioReducer,
    displayOptButtonReducer,
    displayOptCheckReducer,
})

const store = createStore(reducers);
export default store;
