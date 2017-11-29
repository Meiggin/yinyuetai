import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";

import {applyMiddleware} from "redux"
import  {lunboreducer,zhoubianreducer} from "../Reducer";

const store = createStore(combineReducers({
    lunboreducer,
    zhoubianreducer
}),applyMiddleware(thunk))

export default store;