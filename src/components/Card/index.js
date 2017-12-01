import React from "react";
import "./index.scss"
import { connect } from 'react-redux'
class Card extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        let item = null;
        let arr = [];
        let sumPrice = 0;
        if(this.props.sum.bool){
            var { sum } = this.props.sum;
            for(let i in sum){
                let aa = (<li key={i}>
                    <img src={sum[i].img} />>
                    <h4>{sum[i].title}</h4>
                    <div>数量:<button onClick={()=>{this.props.del(sum[i].id)}}>-</button><div>{sum[i].num}</div><button  onClick={()=>{this.props.add(sum[i].id)}}>+</button></div>
                    <p>价格:{sum[i].price*sum[i].num}</p></li>);
                sumPrice+=(sum[i].price*sum[i].num)
                arr.push(aa);
            }
            item = arr;
        }
        else{
            item= '购物车没东西';
        }
        
        return (
            <div className="cardwrap">
                <div className="card">
                    <div className="cardheader">
                        <p className="edit">编辑</p>
                        <p className="finish">完成</p>
                        <p className="cart">购物车</p>
                        <a className="backcontent">
                            <span>...</span>
                        </a>
                    </div>
                    <div className='cardmain'>{
                        item
                    }</div>

                    <div className="cartfooter">
                        
                        <a className="orderbtn">
                            结算
                        </a>
                        <div className="countall">
                            <p className="pricespan">合计:{sumPrice}</p>
                            <p className="priceall"></p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        sum:state.NOW_GOODS
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        add(id){
            dispatch(
                {
                    type:'add',
                    payload:id
                }
            )
        },
        del(id){
            dispatch({
                type:'del',
                payload:id
            })
        }
    }
}
const initCard= connect(mapStateToProps,mapDispatchToProps)(Card);
export default initCard;