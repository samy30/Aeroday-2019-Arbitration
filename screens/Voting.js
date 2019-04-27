import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import {Button, Input} from "galio-framework"
import SwitchSelector from "react-native-switch-selector";
import { Timer } from 'react-native-stopwatch-timer';
import { db } from "../config";
import GetReadyTimer from "../components/GetReadyTimer";
import {Slider, Icon} from 'react-native-elements';
import TabBarIcon from '../components/TabBarIcon';
import NumericInput from 'react-native-numeric-input'
import MyButton from '../components/CustomButton'

const {width, height} = Dimensions.get('window')

var currentTime = 0 ;
var b =0;
var seconds = 0


export default class Voting extends React.Component {
    static navigationOptions = {
        title: 'Comptage des points',
        tabBarLabel: 'Challenge',
        tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={'md-jet'}
        />
      ),
    };

    


    constructor(props, context) {
        super(props, context);
        

        this.state = {
            droneFabriquee: 0,
            posterTechnique: 0,
            penaliteDiametre: 0,
            heliceProtegee: true,
            echecPremierEssai: false,
            quitterZoneDepart: 0,
            passerColonnes: 0,
            toursMosque: 0,
            stab11: 0,
            stab12: 0,
            stab21: 0,
            stab22: 0,
            portail: 0,
            duree: 0,
            collisions: 0,
            timerStart: false,
            totalDuration: 360000,
            timerReset: false,
            voteStarted: false,
            ready: false,
        }
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.handleReady = this.handleReady.bind(this);
        this.handleEndVote = this.handleEndVote.bind(this);
        this.handleTimerComplete = this.handleTimerComplete.bind(this);
        this.getSecs = this.getSecs.bind(this);
    }

    

    handleTimerComplete() {
      this.handleEndVote();
    }

    getSecs(a) {
      b = a.split(':');
       seconds = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);
       this.setState({
         duree: 360-seconds
       })
    }

    handleReady() {
      this.setState({
        ready: true
      });
    }
    async handleEndVote(){

      let teamId =this.props.navigation.state.params.id;
        let ref1 = db.ref("/players/"+teamId);
        ref1.update({
                timerOn: 0,
                //timerStart: false
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
             //error callback
              console.log('error ', error)
            });

      this.setState({
       // timerStart: false
      })

      await this.getSecs(currentTime)

      this.props.navigation.navigate('Result', {
        scoreData: {
            droneFabriquee: this.state.droneFabriquee,
            posterTechnique: this.state.posterTechnique,
            quitterZoneDepart: this.state.quitterZoneDepart,
            passerColonnes: this.state.passerColonnes,
            toursMosque: this.state.toursMosque,
            stab11: this.state.stab11,
            stab12: this.state.stab12,
            stab21: this.state.stab21,
            stab22: this.state.stab22,
            portail: this.state.portail,
            duree: this.state.duree,
            collisions: this.state.collisions,
        },
        id : this.params.id, 
        name: this.params.name 
        });

    }

    getFormattedTime(time) {
        currentTime = time;
    };
    componentWillUnmount() {

      let teamId =this.props.navigation.state.params.id;
        let ref1 = db.ref("/players/"+teamId);
        ref1.update({
                timerOn: 0,
                //timerStart: false
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
             //error callback
              console.log('error ', error)
            });
  }

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
        let teamId =this.props.navigation.state.params.id;
        let ref1 = db.ref("/players/"+teamId);
        ref1.update({
                timerStart: !this.state.timerStart,
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

    


      

    renderVoting() {
      this.params = this.props.navigation.state.params;
        return (
          <View >
            
            <ScrollView 
            style={[{
            marginRight: 10,
            marginLeft: 10,
            }]}
            >
              {/*---------------------------------------*/}
              
              
                
                
                <View style={[{marginTop: 80}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.quitterZoneDepart === 5?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={(prevState) => {
                      let prevValue = (this.state.quitterZoneDepart==5)?0:5
                      /** Do Something **/
                    this.setState({
                        quitterZoneDepart: prevValue
                    });
                }}
                  >
                      {"quitter la zone départ"}
                  </Button>
                </View>

                <View style={[{marginTop: 20}]}>
                </View>
                

                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.echecPremierEssai === false?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    /** Do Something **/
                    let prevValue = (this.state.echecPremierEssai==false)?true:false
                    this.setState({
                      echecPremierEssai: prevValue
                    });
                }}
                  >
                      {"Echec premier essai"}
                  </Button>
                </View>

              {/*---------------------------------------*/}

              
              
              <View 
              style={{alignSelf: 'center',zindex:5, flexDirection: 'row',marginTop: 20}}
              >
              <Text>Les colonnes Cartagineoises</Text>
              </View>
              <View style={[{marginTop: 20}]}>
              
                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.passerColonnes === 2?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                      let prevValue = (this.state.passerColonnes==2)?0:2
                    /** Do Something **/
                    this.setState({
                      passerColonnes : prevValue
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
                      let prevValue = (this.state.passerColonnes==3)?0:3
                    /** Do Something **/
                    this.setState({
                      passerColonnes : prevValue
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
                    let prevValue = (this.state.toursMosque==1)?0:1
                    /** Do Something **/
                    this.setState({
                      toursMosque : prevValue
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
                      let prevValue = (this.state.toursMosque==2)?0:2
                      /** Do Something **/
                    this.setState({
                      toursMosque : prevValue
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
                      let prevValue = (this.state.toursMosque==3)?0:3
                      /** Do Something **/
                      this.setState({
                        toursMosque : prevValue
                      });
                }}
                  >
                            {"effectuer trois tours"}
                  </Button>
                </View>
                {/*---------------------------------------*/}

                <Text>Les Bassins Aglabides</Text>
                <Text>Le premier bassin </Text>
                <View style={[{marginTop: 20}, styles.container]}>
                    <Text style={styles.text}>Hauteur 1 :</Text>
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }]}>
                        <NumericInput rounded minValue={0} maxValue={10} value={this.state.stab11} onChange={(val) =>{this.setState({stab11: val});console.log(this.state.stab11)}}/>
                    </View>
                </View>
                <View style={[{marginTop: 20}, styles.container]}>
                    <Text style={styles.text}>Hauteur 2 :</Text>
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }]}>
                        <NumericInput rounded minValue={0} maxValue={10} value={this.state.stab12} onChange={(val) =>{this.setState({stab12: val});console.log(this.state.stab12)}}/>
                    </View>
                </View>
                <Text>Le deuxiéme bassin</Text>
                <View style={[{marginTop: 20}, styles.container]}>
                    <Text style={styles.text}>Hauteur 1 :</Text>
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }]}>
                        <NumericInput rounded minValue={0} maxValue={10} value={this.state.stab21} onChange={(val) =>{this.setState({stab21: val});console.log(this.state.stab21)}}/>
                    </View>
                </View>
                
                
                <View style={[{marginTop: 20}, styles.container]}>
                    <Text style={styles.text}>Hauteur 2 :</Text>
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }]}>
                        <NumericInput rounded minValue={0} maxValue={7} value={this.state.stab22} onChange={(val) =>{this.setState({stab22: val});console.log(this.state.stab22)}}/>
                    </View>
                </View>

                {/*---------------------------------------*/}
                <Text>Muraille de Sfax</Text>
                <View style={[{marginTop: 20}]}>

                  <Button
                    style={{marginRight: width*35/100}}
                    color={this.state.portail === 50?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                      let prevValue = (this.state.portail==50)?0:50
                    /** Do Something **/
                    this.setState({
                      portail : prevValue
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
                      let prevValue = (this.state.portail==30)?0:30
                    /** Do Something **/
                    this.setState({
                      portail : prevValue
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
                                           this.handleEndVote();
                                           next();
                                       }}
                        >
                            {"Arrivée Hotel Africa "}
                        </AwesomeButton>
                </View>

                {/*---------------------------------------*/}

              </ScrollView>
              <View height={100}
            width={100}
            position="absolute"
            style={{alignSelf: 'flex-start',zindex:5}}>
                  <Timer totalDuration={this.state.totalDuration} start={this.state.timerStart}
                    reset={this.state.timerReset}
                    options={options}
                    handleFinish={this.handleTimerComplete}
                    getTime={this.getFormattedTime} />
              </View>
              <View 
              position="absolute"
              style={{alignSelf: 'center',zindex:5, flexDirection: 'row'}}>
              <Icon
               
                raised
                name= {!this.state.timerStart?'play':'pause'}
                type='font-awesome'
               color='#f50'
                onPress={() =>{ 
                  console.log(this.getSecs(currentTime))
                  this.toggleTimer()
                }} />
              
                <Icon
                raised
                name='stop'
                type='font-awesome'
               color='#f50'
                onPress={() => this.handleEndVote()} />
              
                
                </View>
 
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

      render(){

        this.params = this.props.navigation.state.params;
        console.log(this.params);
        if ((typeof this.params === 'undefined')||(typeof this.params.scoreData === 'undefined')) {

        } else {

            this.setState ({
                id: this.params.id,
            });
          }

        let { ready, timerOff } = this.state;
    return (
      <View style={styles.startContainer}>
      {
        (this.state.voteStarted === true)?
        <View>
          {(!ready && <GetReadyTimer onReady={this.handleReady} />) ||(
              this.renderVoting()
            )
            }
        </View>:
        <View style={styles.startContainer}>
        <AwesomeButton style={{marginRight: 2}}
                            height={210}
                            width={210}
                            borderRadius={300}
                            backgroundColor={'#FFA500'}
                            progressLoadingTime={1000}
                            onPress={ next => {
                              let teamId =this.props.navigation.state.params.id;
                              let ref1 = db.ref("/players/"+teamId);
                              ref1.update({
                                timerOn: 1,
                                timerStart: true,
                              }).then((data) => {
            //success callback
                              console.log('data ', data)
                                }).catch((error) => {
             //error callback
                              console.log('error ', error)
                                 });
                             this.setState({
                               //timerStart : !this.state.timerStart,
                               //timerStart: true,
                               voteStarted: true,
                             })
                           
                           next();
                            }
                           }
             >
       {"Commencer l'arbitrage"}
       </AwesomeButton>
        
 </View>
      }
      
        
      </View>
    );
  }








        
}
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    startContainer: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
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
      backgroundColor: '#434360',
      padding: 5,
      borderRadius: 5,
      width: 100,
    },
    text: {
      fontSize: 21,
      color: '#FFF',
      marginLeft: 2,
    }
  };