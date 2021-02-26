import React from 'react'
import { Button } from './style'

export const ViewButton = ({ children, onClick, disabled }) => {
return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}