import React,{useState} from 'react'

const User = ({name,location,gmail}) => {
const [count1,setCount1] = useState(0);
const [count2,setCount2] = useState(0);
  return (
    <div className='user-card'>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h2>Connect : {gmail}  </h2>
        <h3>count1 : {count1}</h3>
        <h3>count2 : {count2}</h3>
        <button onClick={()=>{
            setCount1((t)=> t+1);
            setCount2((t)=> t+2)

        }}>Increse</button>
    </div>
  )
}

export default User
