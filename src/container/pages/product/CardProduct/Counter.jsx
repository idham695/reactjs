import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { rootContext } from '../../../Home/Home';

class Counter extends Component {
    render() {
        return (
            <rootContext.Consumer>
                {
                    value => {
                        return (
                            <div className="counter">
                                <button className="minus" onClick={() => value.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                                <input type="text" value={value.state.totalOrder} />
                                <button className="plus" onClick={() => value.dispatch({ type: 'PLUS_ORDER' })}>+</button>
                            </div>
                        )
                    }
                }

            </rootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
//         handleMinus: () => dispatch({ type: 'MINUS_ORDER' })
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter