import React from 'react'
import makeStyle from '../../../styles/content'
import clsx from 'clsx'
import { Box } from '@mui/system'

const Circle = ({ text }) => {
   const classes = makeStyle()
    return (
        <Box className={ clsx( classes.number , classes.style_card)}>
            { text ? text : '1'}
        </Box>
  )
}

export default Circle