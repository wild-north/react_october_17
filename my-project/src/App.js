import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Checkbox,
  Chat
} from './Demo';

const timerStyles = {
  color: 'red'
};

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  render() {
    const { showFullDate } = this.props;

    if (showFullDate) {
      return (
        <div>
          <h1>TIME:</h1>
          <h2 style={ timerStyles }>{ this.state.date.toLocaleString() }</h2>
        </div>
      );
    }

    return (
      <h1>{ this.state.date.toLocaleTimeString() }</h1>
    );
  }
}

// const Timer = (props) => {
//   const { date } = props;

//   return (
//     <h1>{ date.toLocaleTimeString() }</h1>
//   );
// }

// class App extends Component {
//   render() {
//       const list = [
//         'lorem', 'ipsum'
//       ];

//         return (
//           <div className="App">
//             <header className="App-header">
//               <img src={ logo } className="App-logo" alt="logo" />
//               <h1 className="App-title">Welcome to React</h1>
//             </header>
//             <p className="App-intro">
//               To get started, edit <code>src/App.js</code> and save to reload.
//             </p>
//             <div>
//               {
//                 list.map((elem, index) => {
//                   return <li key={ index }>{ elem }</li>;
//                 })
//               }
//             </div>
//             <Timer2 showFullDate />
//           </div>
//         );
//     }
//   }

const App = () => (
  <div>
    <Chat welcomeMessage="hi there!">
      <div>bla bla bla</div>
    </Chat>

    <hr/>
    
    <Checkbox />
  </div>
);


export default App;
