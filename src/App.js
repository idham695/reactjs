import React, { Component } from 'react';
import './App.css';
import List from './List';

// 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>


        <List items={this.state.items} />
      </div>
    );
  }
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

// event

// class Toogle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toogleStatus: true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       toogleStatus: !state.toogleStatus
//     }))
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.toogleStatus ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }
/* <Toogle /> */

