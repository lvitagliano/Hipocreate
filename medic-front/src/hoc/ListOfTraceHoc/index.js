import React from 'react'
import { useQuery } from '@apollo/client';
import { SelectIcon } from '../../components/Buttons/SelectIcon';
import { GET_ITEM, GET_TRACE_BY_ID } from '../../container/Querys'

export const ListOfTraceHoc = ({isMulti = false, handleChange}) => {
  const id =  "5f52637853c2514380e94299"
  const { loading, error, data } = useQuery(GET_TRACE_BY_ID,
     { variables : {id}}
   )

  const appa = []
  if(!loading){
    const { get_trace_by_user = {} } = data
    get_trace_by_user.map((x) =>{
      appa.push({value: x._id, label: `Origen: ${x.origin} - Destino: ${x.destiny}, Tipo: ${x.type} - Cat.: ${x.category}`})
    })
   
  }

  const handleSelectChange = (name, value) => {

    handleChange(name, value)
  }

  return (
    <div>
     <SelectIcon placeholder='Trazabilidad' name='traceID' handleChange={handleSelectChange} options={appa}/>
    </div>
  )
}
