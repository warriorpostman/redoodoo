import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestContainer from './TestContainer';
import DisplayContainer from './DisplayContainer';

class App extends Component {
  render() {
    console.log('props: ', this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{this.props.children}</div>
        <div>
          Hello
          <TestContainer />
          <DisplayContainer hello='some text'/>
        </div>
      </div>
    );
  }
}

export default App;
