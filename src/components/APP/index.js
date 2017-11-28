import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom";




class App extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
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