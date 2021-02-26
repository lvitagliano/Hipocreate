import React from 'react'
import { useQuery } from '@apollo/client';
import { SelectIconMulti } from '../../components/Buttons/SelectIconMulti';
import { GET_EVENTS } from '../../container/Querys'

export const ListOfEventsHoc = ({isMulti = false, handleChange}) => {
  const { loading, error, data } = useQuery(GET_EVENTS)
  const appa = []

  if(!loading){
    const { getEvents = {} } = data
    getEvents.map((x) =>{
      appa.push({value: x._id, label: `Nombre:${x.name} - Descripción: ${x.description}`})
    })
  }

  const handleSelectChange = (name, value) => {
    handleChange(name, value)
  }

  return (
    <div>
     <SelectIconMulti isMulti={isMulti} placeholder='Eventos' name='event' handleChange={handleSelectChange} options={appa}/>
    </div>
  )
}
