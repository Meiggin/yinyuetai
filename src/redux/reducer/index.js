
import {combineReducers} from 'redux'
const defaultState = {
        newgoodsreducer:{},
        productreducer:{}

}
const newgoodsreducer = (state=defaultState.newgoodsreducer,action)=>{
   
    switch(action.type){
        case "newgoodslist":
        return Object.assign({},state,action.payload)
        default :
        return state;
    }
}

const productreducer = (state=defaultState.productreducer,action)=>{
    
     switch(action.type){
         case "productlist":

         return Object.assign({},state,action.payload)
         default :
         return state;
     }
 }

const Reducer = combineReducers({
     newgoodsreducer,
     productreducer
})


// const productreducer = (state=[],info)=>{
//     let {type,payload} = info;

//     switch(type){
//         case "productlist":
//             return [...payload];
//         default :
//             return state;
//     }
// }










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

const searchreducer = (state=[],info)=>{
    let {type,payload} = info;

    switch(type){
        case "searchlist":
            return [...payload];
        default :
            return state;
    }
}


// const newgoodsreducer = (state={},action = {})=>{
//     let {type,payload} = action;

//     switch(type){
//         case "newgoodslist":
//         return {...payload};
//         default :
//             return state;
//     }
// }




// const chatReducer = (state = defaultState, action = {}) => {
//     const { type, payload } = action;
//     switch (type) {
//       case ADD_CHAT:
//         return Object.assign({}, state, {...payload});
//       case CHANGE_USERNAME:
//         return Object.assign({}, state, {
//           userName: payload
//         });
//       default: return state;
//     }
//   };
  
export  {lunboreducer,zhoubianreducer,newgoodsreducer,searchreducer,productreducer};