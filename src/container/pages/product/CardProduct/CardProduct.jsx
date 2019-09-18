import React, { Component } from 'react';
import Counter from './Counter'

class CardProduct extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="" alt="" />
                    </div>
                    <p className="product-title">Ayam tanpa gambar</p>
                    <p className="product-price">Rp. 140.000</p>
                    <Counter onChounterChange={(value) => this.props.onChounterChange(value)} />
                </div>
            </div >
        )
    }
}


export default CardProduct;