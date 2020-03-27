import React, { Component } from 'react'
import request from '../api/request'

export default class Send extends Component {


    state =  {
        value : ''
    }

    onSubmit =  (e) => {


        e.preventDefault();
        
        console.log(this.state.value)

        request.post('/messages', {
            user : 'bill',
            content : this.state.value,
            date : Date.now()
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        

          this.setState({ value:'' })

    }

    onChange = (e) => {

        this.setState({ value : e.target.value })
    }


    render(){
        return(
            <div className="send">
                <form className="writing-field" onSubmit={this.onSubmit}>
                    <input className="field-input" type="text" placeholder="your message" value={this.state.value} onChange={this.onChange}/>
                    <input className="btn"   type="submit" value="GO"/>
                </form>
            </div>
        )
    }
}

