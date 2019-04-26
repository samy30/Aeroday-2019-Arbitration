import React from "react";
import {Text, View, StyleSheet} from "react-native"

class GetReadyTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 3
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    let { timeLeft } = this.state;
    timeLeft--;

    if (timeLeft < 0) {
      this.props.onReady();
    }
    else {
        this.setState({
            timeLeft
          });
    }
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  render() {
    return (
        <View className='ready-timer' style={styles.timer}>
    <Text style={styles.text}>{this.state.timeLeft}</Text>
        </View>
       
    );
  }
}

var styles = StyleSheet.create({
    timer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 85
    }
})

export default GetReadyTimer;