import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";

import {applyMiddleware} from "redux"
import  {lunboreducer,zhoubianreducer,newgoodsreducer,searchreducer,productreducer} from "../Reducer";

const store = createStore(combineReducers({
    lunboreducer,
    zhoubianreducer,
    newgoodsreducer,
    searchreducer,
    productreducer
}),applyMiddleware(thunk))

export default store;