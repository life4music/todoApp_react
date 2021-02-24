import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    time: 0,
    active: false
  }

  addSecond = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1
    }))
  }

  handleClick = () => {
    if(this.state.active) {
      clearInterval(this.interval)
    } else {
      this.interval = setInterval(() => this.addSecond(), 1000)
    }

    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return(
      <>
        <p>{this.state.time}</p>
        <SwitchButton active={this.state.active} click={this.handleClick}/>
      </>
    );
  }
}

export default App;