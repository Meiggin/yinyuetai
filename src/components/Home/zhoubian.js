import React from "react";
import "./index.scss"
import { connect } from "react-redux";
import axios from "axios"

class Zhoubian extends React.Component{
    componentWillMount(){
        if(this.props.list.length==0){
            this.props.getzhoubian()
        }
        
    }
    render(){
        var ulli = this.props.list.map((ele)=>{
            // console.log(ele)
            return <li>
                <a key={ele.id}>
                    <img src={ele.img}/>
                    <span>{ele.name}</span>
                </a>
            </li>
                
            
        })
        return (
            <div>
                <ul className="hotkeydiv">
                    {ulli}
                </ul>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        // console.log(state.zhoubianreducer);
        return {
            list:state.zhoubianreducer
        }
    }
    ,
    {
        getzhoubian:()=>{
            return (dispatch)=>{
                axios.get("/api/hotKeyword/indexList.json?equipmentName=WAP&num=6").then(res=>{
                    // console.log(res.data.data)
                    dispatch({
                        type:'zhoubianlist',
                        payload:res.data.data
                    })
                })
            }
        }
    }
)(Zhoubian);