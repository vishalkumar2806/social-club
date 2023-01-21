import React from 'react'
import makeStyle from '../../../styles/content'
import clsx from 'clsx'
const VerticalBar = ({locate}) => {
    const classes = makeStyle()


  return (
    <div className={clsx(classes.card_line , classes.card_line_style)}>
        { locate ? 'imhere' : ''}
    </div>
  )
}

export default VerticalBar