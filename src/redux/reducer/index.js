
import {combineReducers} from 'redux'
const defaultState = {
        newgoodsreducer:{},
        productreducer:{},
        MYID:null,
        NOW_GOODS:{
            sum:{},
            bool:false,
        }

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

const MYID =(a=null,action)=>{
    switch (action.type){
        case 'getId':
            console.log(action.payload);
            return action.payload;
        default:
            return a;
    }
}

// const VALUE =(state={count:0},action)=>{
//     switch {action.type}{
//         case 'INCREASE':
//             return {count: state.count +1}
//         default:
//             return state;
//     }
// }


const NOW_DETAIL = (b = null,action)=>{
    switch(action.type){
        case 'nowdetail':
            return action.payload;
        default:
            return null;
    }
}

const NOW_GOODS = (c =defaultState.NOW_GOODS,action )=>{
    switch (action.type){
        case 'nowGoods':
            let sum = action.payload;
            let oldSUM = c.sum;
            let newSum  = Object.assign({},{[sum.id]:sum},oldSUM);
           

            return Object.assign({},c,{sum:newSum},{bool:true});
        case 'del':
        console.log(c);
            let id = action.payload;
            if(c.sum[id].num-1>0){
                c.sum[id].num--;
                return Object.assign({},c);
                
            }
            else{
                //----移出
                let id = action.payload;
                let sum = {};
                for(let i in c.sum){
                    if(i != id){
                        sum[i] = c.sum[i];
                    }
                }
                //--------sum就是没有这个id的购物车集合了。
                return Object.assign({},c,{sum});
            }
        case 'add':
                console.log(c.sum);
                console.log(action.payload);
                console.log( c.sum[action.payload]);
                c.sum[action.payload].num++;
                return Object.assign({},c);    

        default:
            return c;
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
  
export  {lunboreducer,zhoubianreducer,newgoodsreducer,searchreducer,productreducer,MYID,NOW_DETAIL,NOW_GOODS};