import React,{useState,useEffect} from 'react'
import { SimpleGrid ,Box,Button} from '@chakra-ui/react'

import { getProducts} from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from 'react-redux'
import Card from './Card'




const Product = () => {
const dispatch= useDispatch()
const[page,setPage]=useState(1)
const {products}=useSelector((store)=>store.AppReducer)
       
 
  
    useEffect(() => {
        dispatch (getProducts(page))
       
    }, [page])
  console.log(products)

  return (
    
    <>
          <select>
            <option value="">Select</option>
            <option value="&filter=kids">Kids</option>
            <option value="&filter=women">Women</option>
            <option value="&filter=homedecor">Home_Decorator</option>            
          </select>

          <select>
            <option value="#">Select</option>
            <option value="lth">Low to high</option>
            <option value="htl">High to Low</option>
          </select>

    <SimpleGrid columns={[1,2,3,4]} spacing={1}>
    { products.data?.map((products)=>{return <Card products={products}/>})}
   

  </SimpleGrid>
  


  <Button style={{backgroundColor:"gray", marginRight:"90px" , marginBottom:"30px", marginTop:"20px"}}  onClick={()=>setPage(page=>page-1)} colorScheme='red' variant='outline'>Previous</Button>

  <Button style={{backgroundColor:"gray" , marginBottom:"30px" , marginTop:"20px"}} onClick={()=>setPage(page=>page+1)}colorScheme='red' variant='outline'>Next</Button>

  </>
  )
}

export default Product