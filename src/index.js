import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';


// const globalState = {
//     totalOrder: 0
// }

// Reducer
// const rootReducer = (state = globalState, action) => {
//     switch (action.type) {
//         case 'PLUS_ORDER':
//             return {
//                 ...state,
//                 totalOrder: state.totalOrder + 1
//             }
//         case 'MINUS_ORDER':
//             return {
//                 ...state,
//                 totalOrder: state.totalOrder - 1
//             }
//         default:
//             return state
//     }
// }

// Store
// const store = createStore(rootReducer);





// ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
