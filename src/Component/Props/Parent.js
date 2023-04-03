import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    
  render() {
   let  books = [
        { name:"You Are Born to Blossom",
        year : 2011
        },
        { name:"Spirit of India",
        year :2013
        },{ name:" Governance for Growth in India",
        year : 2014
        },{ name:"The Family and the Nation",
        year :2015
        },{ name:"  Mission of India",
        year :2005
        },{ name:"Wings of fire",
        year : 1999
        },{ name: "You are Unique:",
        year :2012
        }
        ]
        var mt=(a,b)=>{
            let rt=books.filter((value,index)=>{
                return value.year<a.year
            })
            let sec=document.getElementById("section")
            rt.map(()=>{
                let head=document.createElement("h2")
                sec.appendChild(head)
                head.innerHTML=value.name;
            })
            
        }
    return (
      <div>
        <Child jack={books} boot={mt}/>
      </div>
    )
  }
}

export default Parent
