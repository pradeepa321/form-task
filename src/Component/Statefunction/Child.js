import React from 'react'

export const Child = (sec) => {
    let beat=sec.deepa
  
    return (
      <div>
      {beat.map((value,index)=>{
        return <div key={index}>
          <h2>{value.id}</h2>
          <h3>{value.name}</h3>
          <p>{value.salary}</p>
          <button onClick={()=>sec.bt(value,index)}>Click Here</button>
        </div>
            })}
      </div>
    )
  }