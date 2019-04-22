import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'galio-framework';
import CircleButton from 'react-native-circle-button';

class ColonesCarthaginoises extends  React.Component {
  render () {
    return (

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
      }}>
    <Button color={this.props.obj[0]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(1,0,15,15)}>Passer entre 2 colones</Button>
    <Text>       {this.props.aa}        </Text>
    <Button color={this.props.obj[1]} iconSize={7} size='small' radius={180} style={{alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.add(1,1,30,20)}>Passer entre 3 colones</Button>
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

export default ColonesCarthaginoises ;
