
// import {combineReducers} from 'redux'
// const defaultState = {
//         FROM_PIC:{}

// }
// const FROM_PIC = (state=defaultState.FROM_PIC,action)=>{
   
//     switch(action.type){
//         case "lunbo":
//         return Object.assign({},state,action.payload)
//         default :
//         return state;
//     }
// }

// const Reducer = combineReducers({
//      FROM_PIC,
// })



const lunboreducer = (state=[],info)=>{
    let {type,payload} = info;

    switch(type){
        case "lunbolist":
            return [...payload];
        default :
            return state;
    }
}

const zhoubianreducer = (state=[],info)=>{
    let {type,payload} = info;

    switch(type){
        case "zhoubianlist":
            return [...payload];
        default :
            return state;
    }
}
export  {lunboreducer,zhoubianreducer};