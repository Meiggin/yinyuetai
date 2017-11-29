import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";

import {applyMiddleware} from "redux"
import  {lunboreducer,zhoubianreducer,newgoodsreducer} from "../Reducer";

const store = createStore(combineReducers({
    lunboreducer,
    zhoubianreducer,
    newgoodsreducer
}),applyMiddleware(thunk))

export default store;