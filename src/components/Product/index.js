import React from "react";
import "./index.scss"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import ReactSwipe from 'react-swipe';
import axios from "axios"
import { Layout, Affix, Button, Row, Col, Collapse } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
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
width:'100%'
};
class Product extends React.Component {
    componentWillMount() {
        this.props.productid()
    }

    render() {
        var product = this.props.list.goodsDetail;
        // for(var i in product){
        //     console.log(product[i])
        // }
        if (product) {
            console.log(product)
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
                                    <input type="text"/>
                                    <button>+</button>
                                    <button>-</button>
                                    <button>确认</button>
                                    <button>取消</button>
                                </p>
                            </Panel>
                        </Collapse>
                    </Footer>
                </Layout>
            </div>
        )

    }

}
export default connect(
    (state) => {
        // console.log(state.productreducer);
        return {
            list: state.productreducer
        }
    }
    // null
    ,
    {
        productid: () => {
            return (dispatch) => {
                axios.get("/details?goodsId=3590&refUrl=").then(res => {
                    // console.log(res.data)
                    dispatch({
                        type: 'productlist',
                        payload: res.data
                    })
                })
            }
        }
    }
)(Product);;