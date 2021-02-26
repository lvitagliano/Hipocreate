import React from 'react'
import { Button } from './style'

export const EditButton = ({ children, onClick, disabled }) => {
return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}