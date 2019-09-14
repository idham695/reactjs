import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Product from '../product/Product';
// import LifeCycle from '../LifeCycle/LifeCycle';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp title="membaca"
                    desc="20x ditonton. 1 hari yang lalu"
                />
                <YoutubeComp title="menulis"
                    desc="200x ditonton. 3 hari yang lalu"
                />
                <YoutubeComp title="menari"
                    desc="300x ditonton. 5 hari yang lalu"
                />
                <YoutubeComp title="menembak"
                    desc="40x ditonton. 2 hari yang lalu"
                />
                <YoutubeComp /> */}
                {/* <p>Counter</p>
                <hr />
                <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                        <LifeCycle /> : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;