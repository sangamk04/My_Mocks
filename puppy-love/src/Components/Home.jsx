import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

 const [datas,setData]=useState([])
 const [req,setReq]=useState([])

 useEffect(() =>{
   axios.get(`https://dog.ceo/api/breeds/list/all`).then((r)=>
   setData(r.data.message))
   .catch((err)=> console.error(err))

 },[])
 let data=[]
for(let k in datas){
data.push(k)
  
}

  return (

    <div>
        {data.map((el)=><Link to="/puppy">
          
            <li>{el}</li>
        </Link>)}
    </div>
  )
}

export default Home;