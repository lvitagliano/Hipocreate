import React, { useEffect, Fragment, useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { Cuerpo } from "./style";
import Select from 'react-select'

export const SelectIcon = ({handleChange, placeholder, options, valuePre = '', name, isMulti = false }) => {
    const InitialState = options.filter(val => val.value === valuePre)
    const [state, setstate] = useState({
        value: '',
        label: ''
    })

    useEffect(() => {
        if(InitialState.length > 0){
            setstate({
                ...state,
                value: InitialState[0].value,
                label: InitialState[0].label
            })
        }
        }, [])
        
    const handleInputChange = (event, e) => {
        setstate({
            ...state,
            value: event.value,
            label: event.label
        })
        handleChange(e.name, event.value)
     }
    return (
        <Cuerpo>
            <Select
            value = {state}

             isMulti={isMulti} 
             isRtl={false} 
             placeholder={placeholder} 
             onChange={handleInputChange} 
             options={options} 
             name={name}/>
        </Cuerpo>
    )
}
