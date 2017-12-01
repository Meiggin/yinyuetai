import React from "react";
import "./index.scss"
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import axios from "axios"

class Newgoods extends React.Component{
    componentWillMount(){
        this.props.getnewgoods()
    }
    gogo(id){
        // console.log('我是gogo');
        this.props.sendID(id);
    }
    render(){
        // console.log(this.props.album)
        // var divimg = this.props.album.map((ele)=>{
        //     console.log(ele.headImg)
        //     return ele
        // })
        var arr = [];
        var item = [];
        var self = this;
        for(let i in this.props.list){
            arr.push({img:this.props.list[i][0].headImg,id:this.props.list[i][0].id,title:this.props.list[i][0].title})
        }
        item = arr.map((ele)=>{
            return <div key={ele.id} onClick={self.gogo.bind(self,ele.id)}>
                <NavLink to="/product">
                    <img src={ele.img}/>
                    <p>{ele.title}</p>
                </NavLink>
            </div>
        })
     
        return (
            <div className="newgoods">
                <p>
                    <span className="span-l">新品首发</span>
                    <span className="span-r">最新专辑、周边上架</span>
                    <a>MORE></a>
                </p>
                <div className="newgoods-home">
                    {item}
                </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        // console.log(state);
        return {
            list:state.newgoodsreducer
        }
    }
    // null
    ,
    {
        getnewgoods:()=>{
            return (dispatch)=>{
                axios.get("/api/goods/findNewGoods.json?num=1").then(res=>{
                    // console.log(res.data.data.goodsMap)
                    dispatch({
                        type:'newgoodslist',
                        payload:res.data.data.goodsMap
                    })
                })
            }
        },
        sendID(id){
            return (dispatch)=>{
                dispatch({
                    type:'getId',
                    payload:id
                })
            }
           
        },
    }
)(Newgoods);