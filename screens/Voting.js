import React from 'react';
import { View, ImageBackground, StyleSheet, ScrollView,Text } from 'react-native';
import Category from './aerochallenge/Category';

export default class Voting extends React.Component {

  state = {
        categories: [
            {'name': 'StartChrono'},
            {'name': 'ColonesCarthaginoises'},
            {'name': 'GrandeMosquee'},
            {'name': 'BassinsAghlabides'},
            {'name': 'MurailleDeSfax'},
            {'name': 'HotelAfrica'},
            {'name': 'Arrivee'}
          ],
          points: 0,
          buttons: [
            [ 'error', 'error', 'error' ],
            [ 'error', 'error' ],
            [ 'error', 'error', 'error' ],
            [ 'error', 'error', 'error', 'error' ],
            [ 'error',  'error' ],
            [ 'error' ],
            [ 'error' ]
          ],
          test: null
     }



  _add100Handler = ( type, i, cptp, cptm) => {
    console.log('old'+this.state.points);
    if(this.state.buttons[type][i] === 'error'){
      let oldpoints = this.state.points;
      console.log('oldpoints'+this.state.points);
      let updatedpoints = oldpoints + cptp;
      this.setState({points: updatedpoints});
      console.log('new'+this.state.points);
      const newButton = { ...this.state.buttons };
      newButton[type][i] = 'success';
      this.setState({buttons: newButton});
      const aaa = this.state.buttons[type][i]
      this.setState({test: aaa});
          }
          else {
            let oldpoints = this.state.points;
            console.log('oldpoints'+this.state.points);
            let updatedpoints = oldpoints - cptm;
            this.setState({points: updatedpoints});
            console.log('new'+this.state.points);
            const newButton = { ...this.state.buttons };
            newButton[type][i] = 'error';
            this.setState({buttons: newButton});
          }
      }




  render() {
    return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={{ height: 40, backgroundColor: '#EA4C89', marginBottom: 10,alignItems: 'center', justifyContent: 'center'}} >

          <Text style={{ color: "#ffffff", fontWeight: 'bold', fontSize: 20, fontFamily: 'sans-serif-condensed' }} >this.props.id</Text>
      </View>
      <ScrollView>
      {this.state.categories.map(order => (
        <View key={order.name}>
        <View style={{ height: 40, backgroundColor: '#5BC0DE',borderRadius: 20 ,marginBottom: 10,alignItems: 'center', justifyContent: 'center'}} >
        <Text style={{ color: "#ffffff", fontWeight: 'bold', fontSize: 20, fontFamily: 'sans-serif-condensed' }} >{order.name}</Text>
        </View>
        <Category type={order.name} hand={this._add100Handler} tab={this.state.buttons} test={this.state.points}/>
        </View>
                ))}
          </ScrollView>
          <Text>{this.state.points}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})

