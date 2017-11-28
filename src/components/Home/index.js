import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"
import "../../../public/font/iconfont.css"

class Home extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div>
                <div className="header">
                    <span className="header-l"></span>
                    <input type="txt"/>
                </div>
                
                <div className="footer">
                    <div className="footerupback"></div>
                    <ul className="footerContent">
                        <li>
                            <NavLink to="/home">
                                <i className="iconfont icon-dianpu hong"></i>
                                <span className="hong">主页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/classify">
                            <i className="iconfont icon-pubuliu"></i>
                                <span>分类</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/find">
                            <i className="iconfont icon-faxianjihuo"></i>
                                <span>发现</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/card">
                            <i className="iconfont icon-caigou"></i>
                                <span>购物车</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">
                            <i className="iconfont icon-yonghu"></i>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Home;