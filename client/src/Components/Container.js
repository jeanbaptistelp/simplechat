import React, { Component } from 'react'
import Display from "./Display";
import Send from "./Send";

export default class Container extends Component {


    render(){
        return(
            <div className="container">
                <Display />
                <Send />
            </div>
        )
    }
}