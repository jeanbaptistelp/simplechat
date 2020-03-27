import React, { Component } from 'react'
import Messages from "./Messages"


export default class Display extends Component {

    

    render(){
        return(
            <div className="display">
                <Messages />
            </div>
        )
    }
}