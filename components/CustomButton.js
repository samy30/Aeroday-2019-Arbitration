import React, { Component } from 'react';
import {Button} from "galio-framework"




class MyButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            active: false,
        }
    }

    

    render() {
        let { attributeName, score, content}=this.props
        return (
            <Button>
                  </Button>
        );
    }
}
export default MyButton
