import React from 'react'
import { useQuery } from '@apollo/client';
import { SelectIcon } from '../../components/Buttons/SelectIcon';
import { GET_NODES } from '../../container/Querys'

export const ListOfNodesHoc = ({handleChange}) => {
  const { loading, error, data } = useQuery(GET_NODES)
  const appa = []
  if(!loading){
    const { getNodes = {} } = data
    getNodes.map((x) =>{
      appa.push({value: x._id, label: `Nombre:${x.name} - Descripción: ${x.description}`})
    })
   
  }

  const handleSelectChange = (name, value) => {
    handleChange(name, value)
  }

  return (
    <div>
     <SelectIcon placeholder='Pasos' name='node' handleChange={handleSelectChange} options={appa}/>
    </div>
  )
}
