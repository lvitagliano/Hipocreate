import React from 'react'
import { useQuery } from '@apollo/client';
import { SelectIconMulti } from '../../components/Buttons/SelectIconMulti';
import { GET_TREES } from '../../container/Querys'

export const ListOfTreesHoc = ({isMulti = true, handleChange}) => {
  const { loading, error, data } = useQuery(GET_TREES)

  const appa = []
  if(!loading){
    const { getTrees = {} } = data
    getTrees.map((x) =>{
      appa.push({value: x._id, label: `Nombre:${x.name} - Descripción: ${x.description}`})
    })
   
  }

  const handleSelectChange = (name, value) => {
    handleChange(name, value)
  }

  return (
    <div>
     <SelectIconMulti isMulti={isMulti} placeholder='Arbol' name='tree' handleChange={handleSelectChange} options={appa}/>
    </div>
  )
}
