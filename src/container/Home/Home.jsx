// Libraries
import React, { Component, Fragment, createContext } from 'react';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

// Component
import Product from '../pages/product/Product';
import LifeCycle from '../pages/LifeCycle/LifeCycle';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DetailPost from '../../component/Post/DetailPost/DetailPost';

// Style
import './Home.css';

export const rootContext = createContext()
const Provider = rootContext.Provider


class Home extends Component {
    state = {
        totalOrder: 0,
        showComponent: true
    }

    dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }
        if (action.type === 'MINUS_ORDER' && this.state.totalOrder > 0) {
            return this.setState({
                totalOrder: this.state.totalOrder - 1
            })
        }
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
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
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
                </Provider>
            </Router>
        )
    }
}

export default Home;