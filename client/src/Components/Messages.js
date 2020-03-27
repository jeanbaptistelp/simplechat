import React, { Component } from 'react'
import Message from './Message';
import request  from '../api/request'


export default class Messages extends Component {

    state = {
        messages : []
    }

    componentDidMount() {

        request.get('/messages', async (req, res) => {

            console.log(req.body)
        }).then( messages => {
            console.log(messages.data)

            this.setState({ messages : messages.data })
        } )
    }

    render(){

        console.log(this.state.messages)
        

        return(
            <div className="Messages">
                {this.state.messages.map( message => <Message content={message.content}/> )}
            </div>
        )
    }
}