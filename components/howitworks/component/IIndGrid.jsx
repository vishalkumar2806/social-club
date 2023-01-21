import React from 'react'
import { Grid, Typography } from '@mui/material'
import Circle from './circle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet} from '@fortawesome/free-solid-svg-icons'


const IIndGrid = () => {
  return (
    <Grid container spacing={3} paddingX={10}>
        <Grid container item xl={4} sm={4} justifyContent='end' alignContent='center' textAlign='end'>
        <Typography variant="h5">
              Add Funds
            </Typography>
            <Typography variant="subtitle2">
              Add Funds to your account using suitable payment option
            </Typography>
        </Grid>
        <Grid item xl={4} sm={4} container justifyContent='center' alignContent='center'>
          <Circle text={2} />
        </Grid>
        <Grid item xl={4} sm={4} justifyContent='left' alignContent='center'>
        <FontAwesomeIcon icon={faWallet}  size='4x' color='#1a87ff' />
        </Grid>
    </Grid>)
}

export default IIndGrid