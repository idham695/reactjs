// Libraries
import React, { Component, Fragment, createContext } from 'react';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

// Component
import Product from '../pages/product/Product';
import LifeCycle from '../pages/LifeCycle/LifeCycle';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DetailPost from '../../component/Post/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';

// Style
import './Home.css';

// Context
export const rootContext = createContext()
const Provider = rootContext.Provider


class Home extends Component {
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
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:id" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycle} />
                        <Route path="/youtube-component" component={YoutubeCompPage} />
                        <Route path="/hooks" component={Hooks} />
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}

export default GlobalProvider(Home)