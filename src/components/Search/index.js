import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"
import { connect } from "react-redux";
import axios from "axios"

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            focus:true
        }
    }
    componentWillMount(){
            this.props.getsearch()
    }
    render(){
        var ulli = this.props.list.map((ele)=>{

            return <li>
                <NavLink key={ele} to="/search/now">
                    <span className="span_t"></span>
                    <span className="span_b">{ele}</span>
                </NavLink>
            </li>
                
            
        })

        return (
            <div className="search-warp">
                <div className="search">
                    <div className="inputSearch">
                        <NavLink to="/home" className="jiantou">
                            <span></span>
                        </NavLink>
                        <NavLink to="/search">
                            <input type="text" onChange={this.handleChange.bind(this)}/>
                        </NavLink>
                        <span className="x"></span>
                        <span className="spanSearch">搜索</span>
                    </div>
                    <div className="ulliSearch"></div>
                </div>
                <ul className="searchUl">
                    {ulli}
                </ul>
                {
                    this.props.children
                }
            </div>
        )
        
    }
    handleChange(e){
        // console.log(e.target.value)
        var value = e.target.value;
        this.props.getsearch(value);
    }
}
export default connect(
    (state)=>{
        // console.log(state.searchreducer)
        return {
            list:state.searchreducer
        }
    }
    ,
    {
        getsearch:(a)=>{
            console.log(a);
                return (dispatch)=>{
                    axios.get("/api/search//suggest.json?number=10&keyWord="+a).then(res=>{
                        console.log(res.data.data)
                        dispatch({
                            type:'searchlist',
                            payload:res.data.data
                        })
                    })
                }

         
        }
    }
)(Search);
