import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Stories = () => {
  return (
    <Grid container spacing={3} sx={{
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundImage : 'url(https://cdn.mypanel.link/editor/previews_theme_3/landing/bg-reviews-5.png)' , 
    opacity: '1',
    filter: 'blur(0px)' , paddingY : 5 , paddingLeft : 10}}>
        <Grid item lg={4} sm={4}>
            <Typography variant='h4'>
            Success Stories of our customers
            </Typography>
            <Typography variant='subtitle1'>
            Check out some of our customers' success stories below.
            </Typography>
        </Grid>
        <Grid item lg={4} sm={4}>
            <Card elevation={2} sx={{ borderRadius: 3 , marginX : 2}}>
            <CardContent>
                <Typography variant='subtitle1' gutterBottom>
                I've been looking for the best SMM solution for my company for some time.
                It wasn't really cost-effective to spend those sums that SMM agencies ask for 
                so I wanted something much simpler and cheaper. This panel has everything I need and more.
                </Typography>
                <Typography variant='h6' textAlign='end'>
                    Ankita roshna
                </Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item lg={4} sm={4}>
        <Card elevation={2} sx={{ borderRadius: 3 , marginX : 2}}>
            <CardContent>
                <Typography variant='subtitle1' gutterBottom>
                I've been looking for the best SMM solution for my company for some time.
                It wasn't really cost-effective to spend those sums that SMM agencies ask for 
                so I wanted something much simpler and cheaper. This panel has everything I need and more.
                </Typography>
                <Typography variant='h6' textAlign='end'>
                    Ankita roshna
                </Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item lg={4} sm={4}>
        </Grid>
        <Grid item lg={4} sm={4}>
        <Card elevation={2} sx={{ borderRadius: 3 , marginX : 2}}>
            <CardContent>
                <Typography variant='subtitle1' gutterBottom>
                I've been looking for the best SMM solution for my company for some time.
                It wasn't really cost-effective to spend those sums that SMM agencies ask for 
                so I wanted something much simpler and cheaper. This panel has everything I need and more.
                </Typography>
                <Typography variant='h6' textAlign='end'>
                    Ankita roshna
                </Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item lg={4} sm={4}>
        <Card elevation={2} sx={{ borderRadius: 3 , marginX : 2}}>
            <CardContent>
                <Typography variant='subtitle1' gutterBottom>
                I've been looking for the best SMM solution for my company for some time.
                It wasn't really cost-effective to spend those sums that SMM agencies ask for 
                so I wanted something much simpler and cheaper. This panel has everything I need and more.
                </Typography>
                <Typography variant='h6' textAlign='end'>
                    Ankita roshna
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    </Grid>

  )
}

export default Stories