import React, { Component } from 'react';
import StartChrono from './StartChrono';
import ColonesCarthaginoises from './ColonesCarthaginoises';
import GrandeMosquee from './GrandeMosquee';
import BassinsAghlabides from './BassinsAghlabides';
import MurailleDeSfax from './MurailleDeSfax';
import HotelAfrica from './HotelAfrica';
import Arrivee from './Arrivee';
import { Text, Button, View } from 'react-native';

class Category extends Component {




     shouldComponentUpdate(nextProps, nextState){
       let ask = true;
       for (i = 0; i < nextProps.tab.length; i++) {
         for( j = 0; i < nextProps.tab[j].length; j++){
           if(nextProps.tab[i][j] != this.props.tab[i][j]){
             ask = false;
           }
         }
        }
        return ask;
     }


  render () {
    let category = null;
           switch ( this.props.type ) {
                    case ( 'StartChrono' ):
                    category = <StartChrono aa={this.props.test} add={this.props.hand}  obj={this.props.tab[0]}/>;
                      break;
                      case ( 'ColonesCarthaginoises' ):
                      category = <ColonesCarthaginoises add={this.props.hand} obj={this.props.tab[1]}/>;
                        break;
                        case ( 'GrandeMosquee' ):
                        category = <GrandeMosquee add={this.props.hand} obj={this.props.tab[2]}/>;
                          break;
                          case ( 'BassinsAghlabides' ):
                          category = <BassinsAghlabides add={this.props.hand} obj={this.props.tab[3]}/>;
                            break;
                            case ( 'MurailleDeSfax' ):
                            category = <MurailleDeSfax add={this.props.hand} obj={this.props.tab[4]}/>;
                              break;
                              case ( 'HotelAfrica' ):
                              category = <HotelAfrica add={this.props.hand} obj={this.props.tab[5]}/>;
                                break;
                                case ( 'Arrivee' ):
                                category = <Arrivee add={this.props.hand} obj={this.props.tab[6]}/>;
                                  break;
                        default:     category = null;
                      }
       return category;
  }
}

export default Category;
