import React,{useState} from 'react'
import Grid from "@mui/material/Grid"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from "./HomePage.module.css"
import { Box, Button, CardActionArea, CardActions, Modal } from '@mui/material';


const CCard = ({data}) => {
    
    const [open, setOpen] = useState(false);
    const setOpenmodal = () => setOpen(true);
    const setClose = () => setOpen(false);

   console.log(data)
  return (
    <div>
   
        
           
          <CardActionArea className={style.mains}>

          <CardMedia
            component="img"
            height="150"
            width="90%"
            image={data.flags.png }
            alt="country-flag"/>

          <CardContent style={{ textAlign: 'left'}}>

         
            <Typography style={{fontSize:"25px"}}>
              {data.altSpellings[1] || data.altSpellings[2] || data.altSpellings[0]}
            </Typography>

            <Typography >
              Population: {data.population}
            </Typography>

            <Typography >
              Region: {data.region}
            </Typography>

            <Typography >
              Capital: {data.capital}
            </Typography>
            
          </CardContent>

          <CardActions>
            <Button style={{backgroundColor:"gray", color:"black", fontWeight:"bold"}} onClick={setOpenmodal}>More Info</Button>
          </CardActions>

        </CardActionArea>
      

      <Modal
        open={open}
        onClose={setClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        background-color="white">
        <Box>

        <Typography className={style.desc} id="desc" sx={{ mt: 6}}>
- Native name: {data.population}
- Sub Region:{data.subregion}
- Currency Name:{data.currency}
- Language Names:{data.language}
- Border Countries:{data.borders}
          </Typography>      
        


        </Box>
     
      </Modal>
     
     

    </div>
  )
}

export default CCard