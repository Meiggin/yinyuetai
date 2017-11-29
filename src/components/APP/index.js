import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom";
import { connect } from "react-redux"



class App extends React.Component{

    render(){
        return (
            <div>

                {
                    this.props.children
                    //子组件加载的位置
                }
            </div>
        )
    }
}
export default App;