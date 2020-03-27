import React, { Component } from 'react'


export default class extends Component {

    // rendering d'un tableau de message



    render(){

        console.log(this.props.content)

        return(
            <div className="message">
                {this.props.content}
            </div>
        )
    }
}