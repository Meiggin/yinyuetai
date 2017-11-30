import React from "react";
import "./index.scss"
import { Button, Flex, WingBlank } from 'antd-mobile';
class Slide extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div className="slide">
                <p>
                    <span className="span-l">热门艺人</span>
                    <a>MORE></a>
                </p>
                <div className="slide_home">
                    
                </div>
            </div>
        )
    }
}
export default Slide;



