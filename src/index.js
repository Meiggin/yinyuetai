import React from "react";
import ReactDOM from "react-dom"
import router from "./router"

import {createStore} from "redux"
import {Provider,connect} from "react-redux"
import store from "./redux/store/index"
import {increase,decrease} from "./redux/action/counter"



// function reducer(state={count:0},action){
//     switch(action.type){
//         case "INCREASE":
//             return {count:state.count+1}
//         default:
//             return state;
//     }
// }
// class Counter extends React.Component{
//     render(){
//         const {value,value1,increase,decrease}=this.props
//         return (
//             <div>
//                 <span>{value}</span>
//                 <span>{value1}</span>
//                 <button onClick={increase}>+</button>
//                 <button onClick={decrease}>-</button>
//             </div>
//         )
//     }
// }
// const getValue = state =>{
//     return {
//         value:state.count,
//         value1: state.count1
//     }
// }

// const CounterContext = connect(getValue,{increase,decrease})(Counter)
ReactDOM.render(router,document.getElementById("box"))
{/* <Provider store={store}><CounterContext/></Provider>,document.getElementById("box")) */}