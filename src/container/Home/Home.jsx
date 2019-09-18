// Libraries
import React, { Component, Fragment } from 'react';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

// Component
import Product from '../pages/product/Product';
import LifeCycle from '../pages/LifeCycle/LifeCycle';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DetailPost from '../../component/Post/DetailPost/DetailPost';

// Style
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
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycle} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;