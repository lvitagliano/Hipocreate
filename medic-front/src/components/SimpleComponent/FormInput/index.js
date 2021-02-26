import React from 'react'
import { FormControl } from '@material-ui/core';
import { Input, Title, Cuerpo } from './style'

export const FormInput = ({name='', value='', handle, type='text', placeholder='', control='', disabled = true}) => {
  
  const hadleChangeInput = (value) => {
    handle(value.target)
  }

  return (
<Cuerpo>
    <FormControl variant="outlined">
      <Title>{placeholder}</Title>
    <Input
      disabled={disabled}
      name={name}
      type={type}
      defaultValue={value}
      onChange={hadleChangeInput}
      placeholder={placeholder}
      control={control}
    />
    </FormControl>
    </Cuerpo>
  )
}
