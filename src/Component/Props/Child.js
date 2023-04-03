import React, { Component } from 'react'

export class Child extends Component {
  render() {
    var dot =this.props.jack
    console.log(dot)
    return (
      <div>
        {dot.map((value,index)=>{
            return <div>
                <h2>{value.name}</h2>
                <h3>{value.year}</h3>
                <button onClick={()=>this.props.boot(value,index)}>Click</button>
                </div>
        })
        }
      </div>
    )
  }
}

export default Child
