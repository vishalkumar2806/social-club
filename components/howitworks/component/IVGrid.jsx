import React from 'react'
import { Grid, Typography } from '@mui/material'
import Circle from './circle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const IVthGrid = () => {
  return (
    <Grid container spacing={3} paddingX={10}>
        <Grid container item xl={4} sm={4} justifyContent='end' alignContent='center' textAlign='end'>
        <Typography variant="h5">
              Instant Result
            </Typography>
            <Typography variant="subtitle2">
            We'll inform you once your order is ready. Enjoy fantastic results!
            </Typography>
        </Grid>
        <Grid item xl={4} sm={4} container justifyContent='center' alignContent='center'>
          <Circle text={4} />
        </Grid>
        <Grid item xl={4} sm={4} justifyContent='left' alignContent='center'>
        <FontAwesomeIcon icon={faThumbsUp}  size='4x' color='#ff4587' />
        </Grid>
    </Grid>)
}

export default IVthGrid