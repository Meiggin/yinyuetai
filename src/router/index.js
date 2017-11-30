import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Card from "../components/Card";
import Product from "../components/Product";
import User from "../components/User";
import Find from "../components/Find";
import Classify from "../components/Classify";
import Search from "../components/Search";
import Now from "../components/Search/Now";
import { Provider } from "react-redux";
import store from "../Redux/store"


const router = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                {/* 只加载匹配路径的第一个children */}
                <Route path="/home" component={Home}/>
                <Route path="/search" render={()=>
                    <Search>
                        <Switch>
                            <Route path="/search/now" component={Now}/>
                        </Switch>
                    </Search>
                }/>
                <Route path='/card' component={Card}/>
                <Route path='/product' component={Product}/>
                <Route path='/user' component={User}/>
                <Route path='/find' component={Find}/>
                <Route path='/classify' component={Classify}/>
                <Redirect from="*" to="/home"/>
            </Switch>
        </App>
    </Router>
    </Provider>
)
export default router;