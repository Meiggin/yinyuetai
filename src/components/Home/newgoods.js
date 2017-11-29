import React from "react";
import "./index.scss"
import { connect } from "react-redux";
import axios from "axios"

class Newgoods extends React.Component{
    componentWillMount(){
        this.props.getnewgoods()
    }
    render(){
        // console.log(this.props.album)
        // var divimg = this.props.album.map((ele)=>{
        //     console.log(ele.headImg)
        //     return ele
        // })
        var arr = [];
        var item = [];
        for(let i in this.props.list){
            arr.push({img:this.props.list[i][0].headImg,id:this.props.list[i][0].id,title:this.props.list[i][0].title})
        }
        item = arr.map((ele)=>{
            return <div key={ele.id}>
                <img src={ele.img}/>
                <p>{ele.title}</p>
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
        }
    }
)(Newgoods);