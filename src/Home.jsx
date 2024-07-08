import React, { useState ,useEffect} from 'react'
import axios from 'axios'

const Home = () => {

    const[value,setValue]=useState("")
    useEffect(() => {
     const timeoutid=setTimeout( async()=>{
        try{
          const {data}=await axios.get(`https://randomuser.me/api/?name=${value} `)
        console.log(data.results[0].email);
        }
        catch(error){
        console.log(error);
        }
      }, 1000);
     //todo baiscally here we have explain the concept of debouncing which means to unintentionally delay the fx or code
      return()=>{
        clearTimeout(timeoutid);
        //* cleartimeout will run everytime the settimeout fx is going to use
      }
    }, [value])
    
  return(

    <div>
        <h1>Home</h1>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}

export default Home