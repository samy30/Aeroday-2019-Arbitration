import React, { Component } from 'react';
import {Button} from "galio-framework"




class MyButton extends Component {

    constructor(props){
        super(props);
    }

    

    render() {
        let { attributeName, score, content}=this.props
        return (
            <Button
                    color={this.state.attributeName === score?'rgba(255, 165, 0, 0.5)':'rgba(255, 165, 0, 1)'}
                    onPress={() => {
                    this.useNativePropsToUpdate.bind(this)
                    /** Do Something **/
                    this.setState(prevState => {
                            prevState.attributeName= (prevState.attributeName==score)?0:score
                    });
                }}
                  >
                  {content}
                  </Button>
        );
    }
}
export default MyButton
