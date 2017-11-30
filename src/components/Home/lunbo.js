import React from "react";
import "./index.scss"
import axios from "axios"
import { connect } from "react-redux";
import ReactSwipe from 'react-swipe';

class Lunbo extends React.Component {
    componentWillMount(){
        
        if(this.props.looplist.length==0){
            this.props.getLunbo()
        }
    }
    render() {
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000}} key={this.props.looplist.length}>
                    {
                        this.props.looplist.map(item=>
                            <img src={item.img} key={item.id}/>
                        )
                    }
                </ReactSwipe>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        // console.log(state.lunboreducer);
        return {
            looplist:state.lunboreducer
        }
    }
    ,
    {
        getLunbo:()=>{
            return (dispatch)=>{
                axios.get("/api/carousel/indexList.json?equipmentName=WAP&num=5").then(res=>{
                    // console.log(res.data.data)
                    dispatch({
                        type:'lunbolist',
                        payload:res.data.data
                    })
                })
            }
        }
    }
)(Lunbo);