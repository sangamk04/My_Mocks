import React, { useState } from "react";
import { Box,Button ,Image} from "@chakra-ui/react";



const Card = ({products}) => {
  console.log(products)
  

  return (
    <Box
      boxShadow={" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
      m={4}    
      width={"290px"}
      padding={2}
      key={products.id}>     
      <Image src={products.image} width={"250px"} alt="alt" />
      <h4>Id:-{products.id}</h4>

        <h4>Brand:-{products.brand}</h4>
        <h4>Title:-{products.title}</h4> 
        <h4>Price:-{products.price}</h4>
        <Button>Add To Cart</Button>


        
     
    </Box>
  );
};

export default Card;