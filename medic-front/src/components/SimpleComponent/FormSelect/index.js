import React, {useState} from 'react'
import { Select, FormControl, MenuItem  } from '@material-ui/core';
import { Title, Cuerpo } from './style'

export const FormSelect = ({ name = '', valor = '', handle, placeholder = '', options = [], disabled = true }) => {

  const hadleChangeInput = (val) => {
    handle(val.target)
  }

  return (
    <Cuerpo>
      <FormControl variant="outlined" style={{ margin: '3px'}}>
      <Title>{placeholder}</Title>
        <Select style={{height:'34px', padding: '6px 50px', margin: '1px'}} 
              disabled={disabled}
          name={name}
          value={valor}
          onChange={hadleChangeInput}
          label={placeholder}
        >
          {
            options.map((items, index) => {
              return <MenuItem key={index} value={items.value}>{items.label}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Cuerpo>
  )
}
