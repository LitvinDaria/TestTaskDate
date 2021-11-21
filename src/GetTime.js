import React, { Component } from "react";

class GetTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return <h1>Текущее время: {this.state.time}.</h1>;
  }
}

export default GetTime;