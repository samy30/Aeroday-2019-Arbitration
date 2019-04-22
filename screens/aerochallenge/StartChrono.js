import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'galio-framework';
import CircleButton from 'react-native-circle-button';

class StartChrono extends  React.Component {
  render () {
    return (

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
      }}>
    <Button color={this.props.obj[0]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }}  onPress={() => this.props.add(0,0,100,100)} >Drone fabriquee</Button>
    <Text> {this.props.aa}              </Text>
    <Button color={this.props.obj[1]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(0,1,10,10)}>Poster technique</Button>
    <Text>               </Text>
    <Button color={this.props.obj[2]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(0,2,5,5)}>Quitter la zone Départ</Button>
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

export default StartChrono ;
