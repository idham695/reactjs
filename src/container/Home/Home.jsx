import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../product/Product';
import LifeCycle from '../LifeCycle/LifeCycle';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            })
        }, 15000)
    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycle} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;