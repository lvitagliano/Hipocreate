import React from 'react'
import { Button } from './style'

export const Buttons = ({ children, onClick, disabled }) => {
return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}