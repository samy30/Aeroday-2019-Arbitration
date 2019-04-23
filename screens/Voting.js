import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import SwitchSelector from "react-native-switch-selector";
import {Button} from "react-native-elements"

const {width, height} = Dimensions.get('window')

export default class Voting extends React.Component {
    static navigationOptions = {
        title: 'Comptage des points',
    };


    constructor(props, context) {
        super(props, context);

        this.state = {
            droneFabriquee: 0,
            posterTechnique: 0,
            quitterZoneDepart: 0,
            passerColonnes: 0,
            toursMosque: 0,
            stab11: 0,
            stab12: 0,
            stab21: 0,
            stab22: 0,
            portail: 0,
            durée: 0,
            collisions: 0
        }
        console.log(this.props.id);
    }



    render() {
      this.params = this.props.navigation.state.params;
      console.log(this.params);
        return (
          <View >
            <View 
            height={100}
            width={100}
            position="absolute"
            style={{alignSelf: 'flex-end',zindex:5}}
            >
                        <AwesomeButton style={{marginRight: 2}}
                                       height={100}
                                       width={100}
                                       borderRadius={50}
                                       backgroundColor={'#FFA500'}
                                       progress
                                       progressLoadingTime={1000}
                                       onPress={ next => {
                                         
                                        this.setState(prev => {
                                            return { collisions:prev.collisions+1}
                                        })
                                      console.log(this.state.collisions)
                                      this.forceUpdate();
                                      next();
                                       }
                                      }
                        >
                            {this.state.collisions+' Collision ' }
                        </AwesomeButton>
                        <AwesomeButton style={{
                            marginLeft: 2,
                            position: 'absolute',
                            right: 0,
                            bottom: 0
                        }}
                                       height={38}
                                       width={38}
                                       borderRadius={20}
                                       raiseLevel={0}
                                       backgroundColor={"#C82333"}
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                               if (prevState.collisions > 0)
                                                   prevState.collisions--
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            -
                        </AwesomeButton>
                        
                    </View>

            <ScrollView 
            style={[{
            marginRight: 10,
            marginLeft: 10,
            }]}
            >
              {/*---------------------------------------*/}
              <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       backgroundColor={this.state.droneFabriquee==100?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       width={width*65/100}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                                   prevState.droneFabriquee= (prevState.droneFabriquee==100)?0:100
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"Drone fabriquée par le participant"}
                        </AwesomeButton>
                </View>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.posterTechnique==10?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            prevState.posterTechnique= (prevState.posterTechnique==10)?0:10
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"poster Technique"}
                        </AwesomeButton>
                </View>

                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.quitterZoneDepart==5?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            prevState.quitterZoneDepart= (prevState.quitterZoneDepart==5)?0:5
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"quitter la zone départ"}
                        </AwesomeButton>
                </View>

              {/*---------------------------------------*/}

              <Text>Les colonnes Cartagineoises</Text>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.passerColonnes==2?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.passerColonnes==2)?prevState.passerColonnes = 0:prevState.passerColonnes = 2
                                          });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"passer entre deux colonnes"}
                        </AwesomeButton>
                </View>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.passerColonnes==3?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                             (prevState.passerColonnes==3)?prevState.passerColonnes = 0:prevState.passerColonnes = 3
                                    });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"passer entre trois colonnes"}
                        </AwesomeButton>
                </View>

                {/*---------------------------------------*/}
                <Text>Minaret de la grande mosquée Okba Ibn Nafi</Text>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.toursMosque==1?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.toursMosque==1)?prevState.toursMosque = 0:prevState.toursMosque = 1
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"effectuer un tour"}
                        </AwesomeButton>
                </View>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.toursMosque==2?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.toursMosque==2)?prevState.toursMosque = 0:prevState.toursMosque = 2
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"effectuer deux tours"}
                        </AwesomeButton>
                </View>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.toursMosque==3?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.toursMosque==3)?prevState.toursMosque = 0:prevState.toursMosque = 3
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"effectuer trois tours"}
                        </AwesomeButton>
                </View>

                {/*---------------------------------------*/}
                <Text>Muraille de Sfax</Text>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.portail==50?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.portail==50)?prevState.portail = 0:prevState.portail = 50
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"Traverser le petit portail"}
                        </AwesomeButton>
                </View>
                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={this.state.portail==30?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.setState(prevState => {
                                            (prevState.portail==30)?prevState.portail = 0:prevState.portail = 30
                                           });
                                           this.forceUpdate();
                                           next();
                                       }}
                        >
                            {"traverser le grand portail"}
                        </AwesomeButton>
                </View>

                {/*---------------------------------------*/}

                <View style={[{marginTop: 20}]}>
                    <AwesomeButton style={{marginRight: 2}}
                                       borderRadius={7}
                                       width={width*65/100}
                                       backgroundColor={'#FFA500'}
                                       progress
                                       onPress={next => {
                                           /** Do Something **/
                                           this.props.navigation.navigate('Result', {
                                            scoreData: this.state,
                                            id : this.params.id, 
                                            name: this.params.name 
                                            });
                                           next();
                                       }}
                        >
                            {"Arrivée Hotel Africa "}
                        </AwesomeButton>
                </View>

                {/*---------------------------------------*/}

              </ScrollView>
 
          </View>

            
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sliders: {
        margin: 20,
        width: 280,
    },
    text: {
        fontSize: 15,
    },
    title: {
        fontSize: 30,
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonRow:
        {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'flex-start',
            marginTop: 20
        },
    flexEnd:
        {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
});