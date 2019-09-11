import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../product/Product';

class Home extends Component {
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
                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home;