import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import {Button} from "galio-framework"
import SwitchSelector from "react-native-switch-selector";
import { Timer } from 'react-native-stopwatch-timer';
import { db } from "../config";


const {width, height} = Dimensions.get('window')

const handleTimerComplete = () => alert("custom completion function");

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
            collisions: 0,
            timerStart: false,
            totalDuration: 90000,
            timerReset: false,
        }
        console.log(this.props.id);
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
        let teamId =this.params.id;
        let ref1 = db.ref("/players/"+teamId);
        ref1.update({
                timerStart: !this.state.timerStart
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
             //error callback
              console.log('error ', error)
            });
      }
     
      resetTimer() {
        this.setState({timerStart: false, timerReset: true});
      }

      useNativePropsToUpdate(){
        this._button.setNativeProps({color: 'rgba(255, 165, 0, 1)'});
        alert("wsol")
      }



    render() {
      this.params = this.props.navigation.state.params;
      console.log(this.params);
        return (
          <View >
            
            <ScrollView 
            style={[{
            marginRight: 10,
            marginLeft: 10,
            }]}
            >
              {/*---------------------------------------*/}
              
              <View style={[{marginTop: 20}]}>
                  
                  
                  <Button 
                  onPress={
                      this.toggleTimer
                  }>
                  <Timer totalDuration={this.state.totalDuration} start={this.state.timerStart}
                    reset={this.state.timerReset}
                    options={options}
                    handleFinish={handleTimerComplete}
                    getTime={this.getFormattedTime} />
                  </Button>
              </View>
              
              <View style={[{marginTop: 20}]}>

                  <Button
                    color={this.state.droneFabriquee === 100?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    //this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                            prevState.droneFabriquee= (prevState.droneFabriquee==100)?0:100
                    });
                    this.forceUpdate();
                }}
                  >
                      {"Drone fabriquée par le participant"}
                  </Button>
                </View>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.posterTechnique === 10?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    //this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    let prevValue = (prevState.posterTechnique==10)?0:10
                    this.setState({
                      posterTechnique: prevValue
                    });
                }}
                  >
                      {"poster Technique"}
                  </Button>
                </View>
                
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.quitterZoneDepart === 5?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                      let prevValue = (prevState.quitterZoneDepart==5)?0:5
                      /** Do Something **/
                    this.setState({
                        quitterZoneDepart: prevValue
                    });
                }}
                  >
                      {"quitter la zone départ"}
                  </Button>
                </View>
                

              {/*---------------------------------------*/}

              <Text>Les colonnes Cartagineoises</Text>
              <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.passerColonnes === 2?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.passerColonnes==2)?prevState.passerColonnes = 0:prevState.passerColonnes = 2
                    });
                }}
                  >
                            {"passer entre deux colonnes"}
                  </Button>
                </View>

                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.passerColonnes === 3?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.passerColonnes==3)?prevState.passerColonnes = 0:prevState.passerColonnes = 3
                    });
                }}
                  >
                            {"passer entre trois colonnes"}
                  </Button>
                </View>


                {/*---------------------------------------*/}
                <Text>Minaret de la grande mosquée Okba Ibn Nafi</Text>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.toursMosque === 1?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.toursMosque==1)?prevState.toursMosque = 0:prevState.toursMosque = 1
                    });
                }}
                  >
                            {"effectuer un tour"}
                  </Button>
                </View>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.toursMosque === 2?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.toursMosque==2)?prevState.toursMosque = 0:prevState.toursMosque = 2
                    });
                }}
                  >
                            {"effectuer deux tours"}
                  </Button>
                </View>
                
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.toursMosque === 3?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.toursMosque==3)?prevState.toursMosque = 0:prevState.toursMosque = 3
                    });
                }}
                  >
                            {"effectuer trois tours"}
                  </Button>
                </View>

                {/*---------------------------------------*/}
                <Text>Muraille de Sfax</Text>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.portail === 50?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.portail==50)?prevState.portail = 0:prevState.portail = 50
                    });
                }}
                  >
                            {"Traverser le petit portail"}
                  </Button>
                </View>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.portail === 30?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                        (prevState.portail==30)?prevState.portail = 0:prevState.portail = 30
                    });
                }}
                  >
                            {"traverser le grand portail"}
                  </Button>
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
                                            scoreData: {
                                                droneFabriquee: this.state.droneFabriquee,
                                                posterTechnique: this.state.posterTechnique,
                                                quitterZoneDepart: this.state.quitterZoneDepart,
                                                passerColonnes: this.state.passerColonnes,
                                                toursMosque: this.state.toursMosque,
                                                stab11: 0,
                                                stab12: 0,
                                                stab21: 0,
                                                stab22: 0,
                                                portail: this.state.portail,
                                                durée: 0,
                                                collisions: this.state.collisions,
                                            },
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


const options = {
    container: {
      backgroundColor: '#000',
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 30,
      color: '#FFF',
      marginLeft: 7,
    }
  };
   