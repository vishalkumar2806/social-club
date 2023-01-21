import { Grid } from '@mui/material'
import React from 'react'
import Faqs from './FAQS/Faqs'
import Features from './features/Features'
import Working from './howitworks/working'
import Leftcol from './leftcol'
import Ribbon from './Ribbon'
import Rightcol from './rightcol'
import Stories from './Stories/Stories'


const Content = () => {
  
  return (
       <Grid container marginTop={12} paddingLeft={2} rowSpacing={3}>
        <Grid item xl={8} sm={8}>
          <Leftcol />
        </Grid>
        <Grid item xl={4} sm={4} >
       <Rightcol />
        </Grid>
        <Grid item xl={12} sm={12} >
       <Ribbon />
        </Grid>
        <Grid item xl={12} sm={12} marginBottom={8} >
       <Features />
        </Grid>
        <Grid item xl={12} sm={12} marginBottom={8}  >
        <Working />
        </Grid>
        <Grid item xl={12} sm={12}>
        <Stories />
        </Grid>
        <Grid item xl={12} sm={12}>
        <Faqs/>
        </Grid>
      </Grid>
  )
}

export default Content