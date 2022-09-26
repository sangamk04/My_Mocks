import React, { useState } from "react";
import { Box,Button ,Image,Text,Flex} from "@chakra-ui/react";
import {FcRating ,FcLike} from"react-icons/fc"
import {BsCart3} from "react-icons/bs"

const Card = ({resturant}) => {
  console.log(resturant)
  

  return (
    <Box
      boxShadow={" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
      m={4}    
      width={"250px"}
      padding={2}
      key={resturant.id}>     
      <Image src={resturant.image} width={"250px"} alt="alt" />
      <Text fontSize={"3xl"}>{resturant.name}</Text>

      <Flex style={{justifyContent:"space-around"}}>
        <Button>Type:{resturant.type}</Button>


        <Button><BsCart3/></Button>
        
      </Flex>

      <Flex style={{justifyContent:"space-around", marginTop:"10px"}}>

        <Button ><FcLike/>{resturant.number_of_votes}</Button>
        <Button >₹:{resturant.price_starts_from}


    </Button>
        <Button><FcRating/>{resturant.rating}
    </Button>
        
      </Flex>      
     
    </Box>
  );
};

export default Card;