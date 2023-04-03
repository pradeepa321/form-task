// import { useState } from "react";


// const Boot = () =>{

//  let mobiles = [
//     {
//     id:"001",
//     name :"oneplus11",
//     price : 56999,
//     isPurchased: true
//   },
//     {
//     id:"002",
//     name : "Vivi Y100",
//     price : 24999,
//     isPurchased: false
//   },
//     {
//     id:"003",
//     name : "Redmi 10",
//     price : 56999,
//     isPurchased : true
//   },
//     {
//     id:"004",
//     name : "iphone 13",
//     price : 62990,
//     isPurchased : false
//   },
//     {
//     id:"005",
//     name : "Nokia",
//     price : 12000,
//     isPurchased : true
//   },
//     {
//     id:"006",
//     name : "Poco M4",
//     price : 13999,
//     isPurchased : true
//   }
// ]
  
//   const [state,setState]=useState(mobiles)


//     let greet = [...mobiles].sort((a,b)=>{
//       return a.price-b.price;
//     })
//     let great=[...greet].reverse();
  
//     const sd=(ar)=>{
//       var tye=[...mobiles].sort((a,b) => {
//           var tent=a.name.toUpperCase()
//           var rent=b.name.toUpperCase()
//           if(tent<rent){
//             return -1
//           }
//           if(tent>rent){
//             return 1
//           }
//           return 0;
          
//    })
//    {ar==='st' ? setState(tye):setState(tye.reverse())}
//      }
   
//   return(
//     <div>
//       <button onClick={()=>sd('st')}>Name apha order</button>
//       <button onClick={()=>sd()}>Name apha reverse</button>
//       <button onClick={()=>setState(greet)}> low to high</button>
//       <button onClick={()=>setState(great)}> high to low</button>
     
//       {state.map((value,index)=>{
//           return(
//             <div key={index}>
//               <h1>{value.name}</h1>
//               <p>{value.price}</p>
              
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }
// export default Boot


