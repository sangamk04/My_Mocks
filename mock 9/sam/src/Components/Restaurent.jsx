import React,{useState,useEffect} from 'react'
import { SimpleGrid ,Box,Button} from '@chakra-ui/react'

import { getResturant } from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from 'react-redux'
import Card from './Card'




const Resturant = () => {
const dispatch= useDispatch()
const[page,setPage]=useState(1)
const {resturant}=useSelector((store)=>store.AppReducer)
       
 
  
    useEffect(() => {
        dispatch (getResturant(page))
       
    }, [page])
  console.log(resturant)

  return (
    
    <>
    <SimpleGrid columns={[1,2,3,4,5]} spacing={1}>
    { resturant.data?.map((resturant)=>{return <Card resturant={resturant}/>})}
   

  </SimpleGrid>


  <Button style={{backgroundColor:"gray", marginRight:"90px" , marginBottom:"30px", marginTop:"20px"}}  onClick={()=>setPage(page=>page-1)} colorScheme='red' variant='outline'>Previous</Button>

  <Button style={{backgroundColor:"gray" , marginBottom:"30px" , marginTop:"20px"}} onClick={()=>setPage(page=>page+1)}colorScheme='red' variant='outline'>Next</Button>

  </>
  )
}

export default Resturant