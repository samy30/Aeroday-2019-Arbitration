import React, { Component } from "react";
import {Text, View} from 'react-native';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 6,
      seconds: 0,
      paused: false,
      reset: false,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    
    
      this.interval = setInterval(this.tick, 1000);
    
  }

  tick() {
    let { seconds, minutes } = this.state;
    this.state.paused = this.props.paused;
    this.state.reset = this.props.reset;
    if(this.props.reset) this.setState({
      seconds: 0,
      minutes: 6
    })
    if(!this.state.paused){
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        this.props.onFinish();
      }
    }
  }

    this.setState({
      seconds,
      minutes
    });
  }

  render() {
    let { minutes, seconds } = this.state;

    let displayedMins = minutes < 10 ? "0" + minutes : minutes + "";
    let displayedSecs = seconds < 10 ? "0" + seconds : seconds + "";

    return (
      <View class="countdown-timer">
      <Text>
      {displayedMins + ":" + displayedSecs}
      </Text>
              </View>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default CountdownTimer;
