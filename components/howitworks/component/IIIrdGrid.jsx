import React from 'react'
import { Grid, Typography } from '@mui/material'
import Circle from './circle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'


const IIIrdGrid = () => {
  return (
    <Grid container spacing={3} paddingX={10}>
        <Grid container item xl={4} sm={4} justifyContent='right' alignContent='center'>
          <FontAwesomeIcon icon={faDollarSign}  size='4x' color='#ffc157' />
        </Grid>
        <Grid item xl={4} sm={4} container justifyContent='center' alignContent='center'>
          <Circle text={3} />
        </Grid>
        <Grid item xl={4} sm={4} justifyContent='left' alignContent='center'>
            <Typography variant="h5">
              Place Your Order
            </Typography>
            <Typography variant="subtitle2">
              Order the SMM services you need to become more popular online.
            </Typography>
        </Grid>
    </Grid>)
}

export default IIIrdGrid