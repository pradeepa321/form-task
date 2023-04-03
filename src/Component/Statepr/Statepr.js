import React, { Component } from 'react'

export class Statepr extends Component {
    constructor(props){
        super(props)
        this.state={
            count:3,
            increse:1
        }
    }
    changeValue=()=>{
        this.setState({count:this.state.count*5})
    }
    changein=()=>{
        this.setState({increse:this.state.increse+2})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2>{this.state.increse}</h2>
        <button onClick={()=>this.changeValue()}>Click</button>
        <button onClick={()=>this.changein()}>Click me</button>
        
      </div>
    )
  }
}

export default Statepr