import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'galio-framework';
import CircleButton from 'react-native-circle-button';

class HotelAfrica extends  React.Component {
  render () {
    return (

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
      }}>
    <Button color={this.props.obj[0]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(5,0)}>Passer</Button>
    <Text>               </Text>
      </View>
    <View style={{
    flex: 1,
    flexDirection: 'column'
  }}>
    <Button color='error' iconSize={7} size='small' style={ { width: 170, height: 170, borderRadius: 170/2}}>Collision</Button>

  </View>
      </View>
    );
  }
}

export default HotelAfrica ;
