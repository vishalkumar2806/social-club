import { Box, Grid } from '@mui/material'
import React from 'react'
import Itembox from './itemBox'
import { faMedal , faCreditCard , faHandHoldingUsd , faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';


const features = [ { 
  title : 'Awesome quality', desc : 'You will be satisfied with the quality of our SMM services.' , icon : faMedal 
 } , {  title : 'Many payment options' , desc : 'Good variety of payment options to choose from.' , icon : faCreditCard } , 
{ title : 'Unbelievable prices' , desc : 'Here you can purchase SMM services at super affordable prices!', icon : faHandHoldingUsd} , 
{ title: 'Very fast delivery' , desc : 'We provide quick order processing and quick results.' , icon : faHandHoldingHeart}]



const Features = () => {
  return (
    <Box>
        <Grid spacing={3} container marginBottom={3} >
          { features.map( (item,index) => { 
              const {title, desc , icon } = item
             return(
             <Grid xl={3} sm={3} item key={index}>
             <Itembox title={title} desc={desc} icon={icon} key={index} />
            </Grid>
            )
          })}
           
    </Grid>
    </Box>
  )
}

export default Features