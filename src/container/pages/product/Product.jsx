import React, { Component } from 'react';
import CardProduct from '../../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </div >
        )
    }
}


export default Product;