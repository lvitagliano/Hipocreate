import React, {Fragment} from 'react'
import { AiFillEdit } from "react-icons/ai";
import Select from 'react-select'

export const SelectIconMulti = ({handleChange, placeholder, options, name, value, isMulti = false }) => {

    const handleInputChange = (event, e) => {
        let name = e.name
        handleChange(name, event)
     }

    return (
        <Fragment>
            <Select isMulti={isMulti} isRtl={false} placeholder={placeholder} onChange={handleInputChange} options={options} name={name}/>
        </Fragment>
    )
}
