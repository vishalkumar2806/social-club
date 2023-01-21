import React from 'react'
import { Container, Grid } from '@mui/material'
import FirstGrid from './component/FirstGrid';
import VerticalBar from './component/VerticalBar';
import IIndGrid from './component/IIndGrid';
import IIIrdGrid from './component/IIIrdGrid';
import IVthGrid from './component/IVGrid';


const Working = () => {
  return (
    <Grid container>
      <Grid item xl={12} sm={12}>
        <FirstGrid />
      </Grid>
      <Grid container item xl={12} sm={12} justifyContent='center' alignContent='center'>
        <VerticalBar />
      </Grid>
      <Grid item xl={12} sm={12}>
        <IIndGrid />
      </Grid>
      <Grid container item xl={12} sm={12} justifyContent='center' alignContent='center'>
        <VerticalBar />
      </Grid>
      <Grid item xl={12} sm={12}>
        <IIIrdGrid />
      </Grid>
      <Grid container item xl={12} sm={12} justifyContent='center' alignContent='center'>
        <VerticalBar />
      </Grid>
      <Grid item xl={12} sm={12}>
        <IVthGrid />
      </Grid>
    </Grid>
  )
}

export default Working


