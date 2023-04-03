import React, { Component } from 'react'

export class State extends Component {
    constructor(){
        super()
        this.state={
          mobiles : [
            {
            id:"001",
            name :"oneplus11",
            price : 56999,
            isPurchased: true
          },
            {
            id:"002",
            name : "Vivi Y100",
            price : 24999,
            isPurchased: false
          },
            {
            id:"003",
            name : "Redmi 10",
            price : 56999,
            isPurchased : true
          },
            {
            id:"004",
            name : "iphone 13",
            price : 62990,
            isPurchased : false
          },
            {
            id:"005",
            name : "Nokia",
            price : 12000,
            isPurchased : true
          },
            {
            id:"006",
            name : "Poco M4",
            price : 13999,
            isPurchased : true
          }
        ],
    
        }
    
      }
        box()
       {
         let loworder=this.state.mobiles.sort((a,b)=>
         {
             return a.price-b.price;
              
         })
         this.setState({mobiles:loworder}) 
       }
       box1()
       {
         let highorder=this.state.mobiles.sort((a,b)=>
         {
             return b.price-a.price;
              
         })
         this.setState({mobiles:highorder}) 
       }
       box2()
       {
         let nameascen= this.state.mobiles.sort((a,b) =>
         {
           let aname= a.name.toLowerCase()
           let bname=b.name.toLowerCase()
          if(aname>bname)
          {
            return 1
          }
          else if(aname<bname)
          {
            return -1
          }
          else 
          {
            return 0;
          }
         }
         )
         this.setState({mobile:nameascen})
       }
       box3()
       {
         let namedescen= this.state.mobiles.sort((a,b) =>
         {
           let aname= a.name.toLowerCase()
           let bname=b.name.toLowerCase()
          if(aname<bname)
          {
            return 1
          }
          else if(aname>bname)
          {
            return -1
          }
          else 
          {
            return 0;
          }
         }
         )
         this.setState({mobile:namedescen})
       }
       
      render() {
        return (
          <div>
            {this.state.mobiles.map(
              (names,index) =>
              {
               return <h2 key={index}>{names.name}-{names.price} </h2>
                
               
              }
            )}
              <button onClick={()=> this.box()}> Low-high</button>
              <button onClick={()=> this.box1()}> high-low</button>
              <button onClick={()=> this.box2()}>A-Z</button>
              <button onClick={()=> this.box3()}>Z-A</button>
          </div>
        )
      }
    }
    
    export default State