import React, {Fragment, useState, useEffect} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useHistory } from "react-router-dom"
import { Error, Form, Input, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { UPDATENODE } from '../../../container/Mutation';
import { GET_NODE_FOR_ID } from '../../../container/Querys';

export const UpdateNode  = ({ id, title }) => {
  const history = useHistory()
  const { data, loading, error} = useQuery(GET_NODE_FOR_ID,
    { variables : {id}}
  )

  const [editNode] = useMutation(UPDATENODE)

  const [state, setstate] = useState({
    name:'',
    description:'',
    status:'Initial',
    icon:'Bandera'
})


  useEffect(() => {    
      if(!loading){
        const { getNode = {} } = data
        if(getNode != null){
          setstate({
            ...state,
            name: getNode.name,
            description :getNode.description,
            status: getNode.status,
            icon: getNode.icon,
          })
        }
      }
  }, [data])

  const handleChange = (event) => {
      setstate({
          ...state,
          [event.target.name]:event.target.value
      })
  }

  const handleSelectChange = (name, value) => {
      setstate({
          ...state,
          [name]:value
      })
  }

const handleSubmit = (event) => {
  event.preventDefault()
    onSubmitUpdate(state)

}

const onSubmitUpdate = (input) => {
  const variables = { id, input }
  editNode({ variables })
  history.push("/nodes");
  }

  return <Fragment>  
    <Form disabled={loading} onSubmit={handleSubmit}>        
        <Title>Editar</Title>
        <Cuerpo>
        <Segmentos><Input placeholder='Nombre' value={state.name} onChange={handleChange}  name='name'  /></Segmentos>
        <Segmentos><Input placeholder='Descripción'  value={state.description} onChange={handleChange} name='description'  /></Segmentos>
      </Cuerpo>
   <Cuerpo>
   {/* <Segmentos><SelectIcon placeholder='Estado Inicial' name='status' handleChange={handleSelectChange} options={STATE}/></Segmentos> */}
   {/* <Segmentos><SelectIcon placeholder='Icono' valor={state.icon} name='icon' handleChange={handleSelectChange} options={ICONS}/></Segmentos> */}
     
        </Cuerpo>
        <SubmitButton disabled={loading}>{title}</SubmitButton>
    </Form>
    {error && <Error>{error}</Error>}
  </Fragment>
}