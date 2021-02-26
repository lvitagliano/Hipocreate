import React from 'react'
import { useQuery } from '@apollo/client';
import { SelectIcon } from '../../components/Buttons/SelectIcon';
import { GET_ITEM } from '../../container/Querys'

export const ListOfItemsHoc = ({isMulti = false, handleChange}) => {
  const { loading, error, data } = useQuery(GET_ITEM)

  const appa = []
  if(!loading){
    const { getItems = {} } = data
    getItems.map((x) =>{
      appa.push({value: x._id, label: x.name})
    })
   
  }

  const handleSelectChange = (name, value) => {
    handleChange(name, value)
  }

  return (
    <div>
     <SelectIcon placeholder='Item' name='item' handleChange={handleSelectChange} options={appa}/>
    </div>
  )
}
