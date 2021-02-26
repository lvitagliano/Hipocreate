import React from 'react'
import { Div, ProgressBar, ProgressValue } from './style'

export const Progress = ({value, color}) => {
  return (
    <Div >
      <ProgressBar >
        <ProgressValue value={value} color={color}>{value}</ProgressValue>
      </ProgressBar>
    </Div>
  )
}
