import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import reducer from "./../reducer/counter"
// const store = createStore(reducer);
import {applyMiddleware} from "redux"
import  {lunboreducer,zhoubianreducer,newgoodsreducer,searchreducer,productreducer,MYID,NOW_DETAIL,NOW_GOODS} from "../Reducer";

const store = createStore(combineReducers({
    lunboreducer,zhoubianreducer,newgoodsreducer,searchreducer,productreducer,MYID,NOW_DETAIL,NOW_GOODS
}),applyMiddleware(thunk))

export default store;