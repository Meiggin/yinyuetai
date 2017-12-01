
var initialState ={
    count:0,
    count1:0,
    lists:{}
}

function reducer(state=initialState,action){
    switch(action.type){
        case "INCREASE":
            // return {count:state.count + 1}
            return Object.assign({},state,{count:state.count + 1})
        case "DECREASE":
            return Object.assign({},state,{count1:state.count1 - 1})
        case "GETLISTS":
            return Object.assign({},state,{list:action.data})
        default:
            return state;
    }
}
export default reducer;