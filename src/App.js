import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;





// Komponen properties

// function Biodata(props) {
//   return <span> umurnya {props.age} </span>
// }

// function Greeting(props) {
//   return <h1> Halo {props.name} - <Biodata age={props.age} /> </h1>
// }

/* <Greeting name="idham" age="20" />
        <Greeting name="i" age="25" /> */


//  state
// class Timer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       time: props.start
//     }
//   }

//   // LifeCycle
//   componentDidMount() {
//     this.addInterval = setInterval(() => this.increase(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.addInterval)
//   }

//   increase() {
//     this.setState((state, props) => ({
//       time: parseInt(state.time) + 1
//     }))
//   }

//   render() {
//     return (
//       <div>{this.state.time} detik </div>
//     )
//   }
// }
/* <Timer start="0" />
<Timer start="5" /> */