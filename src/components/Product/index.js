import React from "react";
import "./index.scss"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import {createStore} from "redux"
import ReactSwipe from 'react-swipe';
import axios from "axios"
import { Layout, Affix, Button, Row, Col, Collapse } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import store from  "./../../redux/store/index"
import {increase} from  "./../../redux/action/counter"
const Panel = Collapse.Panel;
const { Header, Footer, Sider, Content } = Layout;
const customPanelStyle = {
background: 'red',
borderRadius: 4,
marginBottom: 24,
border: 0,
overflow: 'hidden',
color:'#fff',
position:'fixed',
botton:0,
right:0,
width:'100%',
textAlign:'center'
};
// const store = createStore(reducer)



class Product extends React.Component {
    componentWillMount() {
        var newid = this.props.newID;
        console.log(newid);
        this.props.productid(newid)

    }
    toCartPage(){
        
        console.log(this.props.list.goodsDetail)
        var cartpage = this.props.list.goodsDetail
        
        let ele = {
            price:cartpage.price,
            num:1,
            title:cartpage.title,
            img:cartpage.bigHeadImg,
            id:cartpage.id,
        }
        this.props.toCart(ele);
    }
    render() {
        var product = this.props.list.goodsDetail;
       
        
        var arr2 = [];
        var item2 = [];
        for(let i in this.props.newlist){
            arr2.push({id:this.props.newlist[i][0].id})
        }
        item2 = arr2.map((ele)=>{
            console.log(ele.id)
            return <div key={ele.id}>
                
            </div>
        })
        if (product) {
            // console.log(product)
            var imgurl = product.descImages.map((item, index) =>
                <img src={item.thumbUrl} key={index} />
            )
            var title = product.title
            var price = product.price
        }
        return (
            <div className="warp">
                <Layout>
                    <Header className="header" style={{ background: "#fff", opacity: ".5" }}>
                        <Row>
                            <Col span={12}>
                                <NavLink to="/home">
                                    <Affix>
                                        <Button type="primary">返回</Button>
                                    </Affix>
                                </NavLink>
                            </Col>
                            <Col span={6}>
                                <Affix>
                                    <Button type="primary">链接</Button>
                                </Affix>
                            </Col>
                            <Col span={6}>
                                <Affix>
                                    <Button type="primary">更多</Button>
                                </Affix>
                            </Col>
                        </Row>
                    </Header>
                    <ReactSwipe className="carousel" swipeOptions={{ continuous: true, auto: 2000 }} key={{ product }.length}>
                        {imgurl}
                    </ReactSwipe>
                    <p>
                        {title}
                    </p>
                    <p className="price">
                        ￥{price}
                    </p>
                    <Footer>
                        <Collapse bordered={true} defaultActiveKey={['1']}>
                            <Panel header="加入购物车" key="1" style={customPanelStyle}>
                                <p>
                                    <button>-</button>
                                    <span>计数值</span>
                                    <button>+</button>
                                    
                                        <button  onClick={this.toCartPage.bind(this)}  className="button">确认</button>
                                   
                                    <button>取消</button>
                                </p>
                            </Panel>
                        </Collapse>
                        {item2}
                    </Footer>
                </Layout>
            </div>
        )
    }
}
// const mapsTateToProps = (state)=>{
//     return {
//         value: state.count
//     }
// }

// const mapDispatchToProps = {
//     onIncreaseClick:()=>{
//         return {
//             type:"INCREASE"
//         }
//     }
// }
// const getValue = state =>{
//     return {
//         value:state.count,
//         value1:state.count1
//     }
// }
// const CounterContext = connect(getValue,{increase})(Counter)
export default connect(
    (state) => {
        console.log(state.productreducer);
        return {
            list: state.productreducer,
            newID:state.MYID
        }
    }
    // null
    ,
    {
        productid: (newid) => {
            console.log(newid)
            return (dispatch) => {
                // /details?goodsId=4179&refUrl=
                
                axios.get("/details?goodsId="+newid+"&refUrl=").then(res => {
                    // console.log(res.data)
                    dispatch({
                        type: 'productlist',
                        payload: res.data
                    })
                })
            }
        },
        toCart(ele){
            console.log('wocaonima');
            return (dispatch)=>{
                return    dispatch({
                    type:'nowGoods',
                    payload:ele
                })
            }
         
        }
    }
)(Product);;