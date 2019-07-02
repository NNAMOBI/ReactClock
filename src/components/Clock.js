import React, { Component } from 'react'
import { setInterval } from 'timers'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentWillMount(){
        const date = {date: new Date()}
        this.setState(date)
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({date: new Date()})
        },100);
    }


    
    
    render() {
        return (
            <div>
    <h1>{this.state.date.toTimeString().split(' ')[0]}</h1>   
            </div>
        )
    }
}

