import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
import { GlobalConsumer } from '../../../context/context';

class Product extends Component {
    render() {
        return (
            <div>
                <p>Product Page</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </div >
        )
    }
}
export default GlobalConsumer(Product);