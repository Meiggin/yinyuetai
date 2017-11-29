import React from "react";
import "./index.scss"
import { connect } from "react-redux";
import axios from "axios"

class Zhoubian extends React.Component{
    componentWillMount(){
            this.props.getzhoubian()

    }
    render(){
        return (
            <div>
                <ul className="hotkeydiv">
                    <li>
                        <a>
                            <img/>
                            <span>111</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        // console.log(state.zhoubianreducer);
        return {
            looplist:state.zhoubianreducer
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