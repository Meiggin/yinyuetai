import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Card from "../components/Card";
import Product from "../components/Product";

const router = (
    <Router>
        <App>
            <Route path="./home" component={Home}/>
            <Route path='./card' component={Card}/>
            <Route path='./product' component={Product}/>
        </App>
    </Router>
)
export default router;