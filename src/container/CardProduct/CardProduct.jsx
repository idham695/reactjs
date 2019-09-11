import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="" alt="" />
                    </div>
                    <p className="product-title">Ayam tanpa gambar</p>
                    <p className="product-price">Rp. 140.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </div >
        )
    }
}


export default CardProduct;