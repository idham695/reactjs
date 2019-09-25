import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
// import { connect } from 'react-redux';
import { rootContext } from '../../Home/Home';

class Product extends Component {
    render() {
        return (
            <rootContext.Consumer>
                {
                    value => {
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
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </div >
                        )
                    }
                }
            </rootContext.Consumer>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }


export default Product;
// export default connect(mapStateToProps)(Product);