import React, { Component } from 'react'

export class Cycle extends Component {
  constructor(){
    super()
    this.state={
      id:1,
      name:"deepa",
      degree:"Bsc",
    }
  }
  changeName=()=>{
      this.setState({name:"prathi",degree:"Bcom",id:5})
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}{this.state.id}</h2>
        <h3>{this.state.degree}</h3>
       <button onClick={()=>this.changeName()}>Click</button>
      </div>
    )
  }
}

export default Cycle