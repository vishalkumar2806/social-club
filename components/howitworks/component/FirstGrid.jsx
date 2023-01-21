import React from 'react'
import { Grid, Typography } from '@mui/material'
import Circle from './circle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons'


const FirstGrid = () => {
  return (
    <Grid container spacing={3} paddingX={10}>
        <Grid container item xl={4} sm={4} justifyContent='right' alignContent='center'>
          <FontAwesomeIcon icon={faRightToBracket}  size='4x' color='#14ddd7' />
        </Grid>
        <Grid item xl={4} sm={4} container justifyContent='center' alignContent='center'>
          <Circle text={1} />
        </Grid>
        <Grid item xl={4} sm={4} justifyContent='left' alignContent='center'>
            <Typography variant="h5">
              Sign Up
            </Typography>
            <Typography variant="subtitle2">
              First thing you need to do is signup and then login
            </Typography>
        </Grid>
    </Grid>)
}

export default FirstGrid