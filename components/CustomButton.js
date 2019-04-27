import React, { Component } from 'react';
import {Button} from "galio-framework";
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')



class MyButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            active: false,
        }
    }

    

    render() {
        let { attributeName, score}=this.props
        return (
            <Button
                    style={{marginRight: width*35/100}}
                    color={score === 5?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                      let prevValue = (score==5)?0:5
                    /** Do Something **/
                    alert("hi");
                }}
                  >
                  {attributeName}
                  </Button>
        );
    }
}
export default MyButton
