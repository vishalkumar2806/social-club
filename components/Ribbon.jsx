import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'



const Ribbon = () => {
  return (
    <Box marginY={3}> 
        <Card elevation={2}>
            <CardContent>
            <Typography variant='subtitle1' component='h3'  alignItems='center' textAlign={'center'} gutterBottom>
                    WHAT ARE YOU LOOKING FOR?
                </Typography>
                <Typography variant='h2' alignItems='center' textAlign={'center'} gutterBottom>
                    We have it all!
                </Typography>              
                <Typography variant='h5' alignItems='center' textAlign={'center'} gutterBottom>
                We have specially tailored services that are ready for everyone and every use case.
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Ribbon