import React from 'react';
import {ScrollView, StyleSheet, Text, View, YellowBox} from 'react-native';
import {DataTable} from "react-native-paper";
import AwesomeButton from "react-native-really-awesome-button";
import { db } from "../config";
import TabBarIcon from '../components/TabBarIcon';

let ref = db.ref("/players/");

export default class Result extends React.Component {
    static navigationOptions = {
        title: 'Resultat',
        tabBarLabel: 'Resultat',
        tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
             name={'md-clipboard'}
        />
        ),
    };


    constructor(props, context) {
        super(props, context);
    
    }


    Row(props) {
        return (
            <DataTable.Row>
                <DataTable.Cell>{props.label}</DataTable.Cell>
                <DataTable.Cell numeric>{props.value} pt</DataTable.Cell>
            </DataTable.Row>

        );
    }


    render() {
        this.params = this.props.navigation.state.params;
        console.log(this.params);
        if ((typeof this.params === 'undefined')||(typeof this.params.scoreData === 'undefined')) {

        } else {

            this.state = {
                scoreData: this.params.scoreData,
                id: this.params.id,
                name: this.params.name,
                score: 0
            };

            scoreDuree= (this.params.scoreData.duree <= 180)?36:(36- Math.round((this.params.scoreData.duree-180)/5)) 

            this.state.score =
                this.params.scoreData.droneFabriquee
                +
                this.params.scoreData.posterTechnique
                +
                this.params.scoreData.quitterZoneDepart
                +
                this.params.scoreData.passerColonnes*15
                +
                this.params.scoreData.toursMosque*15
                +
                this.params.scoreData.stab11*8
                +
                this.params.scoreData.stab12*4
                +
                this.params.scoreData.stab21*5
                +
                this.params.scoreData.stab22*4
                +
                this.params.scoreData.portail
                +
                scoreDuree
                -
                this.params.scoreData.collisions
            ;

        }
        if ((typeof this.params === 'undefined')||(typeof this.params.scoreData === 'undefined')) {

            return (
                <View>
                    <Text>Aucun score n'est attribué</Text>
                </View>
            );
        } else {
            let teamId = this.state.id ;
            if (typeof this.state.id !== 'undefined'){
              let refPath = "players/"+this.state.id ;
              const ref = db.ref(refPath);
            }
            
            return (
                <ScrollView style={[{
                    backgroundColor: "#ffffff"
                }]}>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>epreuve</DataTable.Title>
                            <DataTable.Title numeric>score</DataTable.Title>
                        </DataTable.Header>
                        <this.Row label={"Drone Fabriquée Par Le Participant"} value={this.state.scoreData.droneFabriquee}/>
                        <this.Row label={"Poster Technique"} value={this.state.scoreData.posterTechnique}/>
                        <this.Row label={"Quitter La Zone Départ"} value={this.state.scoreData.quitterZoneDepart}/>
                        <this.Row label={"Passer Entre Les Colonnes Carthagiénes"} value={this.state.scoreData.passerColonnes*15}/>
                        <this.Row label={"Effectuer Tour autours du minaret du Mosque"} value={this.state.scoreData.toursMosque*15}/>
                        <this.Row label={"Traverser Les portails De La Muraille Du Sfax"} value={this.state.scoreData.portail}/>
                        <this.Row label={"Stabilisation sur le bassin 1"} value={this.state.scoreData.stab11*8 +this.state.scoreData.stab12*4}/>
                        <this.Row label={"Stabilisation sur le bassin 2"} value={this.state.scoreData.stab21*5 +this.state.scoreData.stab22*4}/>
                        <this.Row label={"collisions"} value={this.state.scoreData.collisions*-1}/>
                        <this.Row label={"durée"} value={scoreDuree}/>
                        <this.Row label={"score"} value={this.state.score}/>
                    </DataTable>
                    <View style={{
                        marginRight: 20,
                        marginLeft: 20,
                    }}>
                    <AwesomeButton style={{
                        marginTop: 50,
                        marginBottom: 10,
                    }}
                                   backgroundColor={'#0069D9'}
                                   stretch
                                   onPress={next => {
                                       /** save to database **/
                                       let teamId =this.state.id;
                                       let ref1 = db.ref("/players/"+teamId);
                                       ref1.update({
                                            
                                                score: this.state.score,
                                                name: this.state.name,
                                                scoreData: this.state.scoreData,
                                            
                                       }).then((data) => {
                                           //success callback
                                           console.log('data ', data)
                                       }).catch((error) => {
                                           //error callback
                                           console.log('error ', error)
                                       });
                                       this.props.navigation.navigate('Scoreboard', {
                                           user : {
                                               id: this.state.id, // TODO : matensech id
                                               name: this.state.name,
                                               score: this.state.score,
                                           }
                                       });
                                       next();
                                   }}
                    >
                        Save
                    </AwesomeButton>
                    </View>
                </ScrollView>
            );
        }
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
});