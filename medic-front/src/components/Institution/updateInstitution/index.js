import React, { useEffect , useContext, Fragment, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useHistory } from "react-router-dom"
import moment from 'moment';
import { Error, Form, Input, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { EDIT_PROFESSIONAL } from '../../../container/Mutation';
import { GET_INSTITUTION_FOR_ID } from '../../../container/Querys'
import { LABELS, PROFILE } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'

export const UpdateInstitution  = () => {
  const history = useHistory()
  const ruta = history.location.pathname;
  const titulo = ruta.split('/',);
  const id_ins = titulo[2];
  const [state, setstate] = useState({
    name:'',
    description:'',
    address:'',
    type:''
  })
  const INSTITUTIONTYPE = useMonths(PROFILE[languaje])

  const [id, setId] = useState('')
  const {languaje} = useContext(Context)
  const [editProfessional] = useMutation(EDIT_PROFESSIONAL);
  const { loading, error, data } = useQuery(GET_INSTITUTION_FOR_ID,
    { variables : {id_ins}}
  )

  useEffect(() => {   
    if(!loading){
      const { getInstitucion = {} } = data
      if(getInstitucion != null){
      setId(id_ins)

      setstate({
            ...state,
            name: getInstitucion.name ,
          description: getInstitucion.description ,
          address: getInstitucion.address ,
          type: getInstitucion.type
      })
    }
  }
}, [data])
  const handleChange = (event) => {
      setstate({
          ...state,
          [event.target.name]:event.target.value,
      })
  }
  const handleSelectChange = (name, value) => {
      setstate({
          ...state,
          [name]:value,
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmits(state)
  }
  const onSubmits = (create_inst) => {
  const variables = {id_ins, create_inst}
  editProfessional({ variables })
  history.push("/institutions");
  }

return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.INSTITUTION[languaje]}</Title>
    <Cuerpo>
      <Segmentos>
        <label>{LABELS.NAME[languaje]}</label>
        <Input placeholder={LABELS.NAME[languaje]} onChange={handleChange}  name='name'  value={state.name}/></Segmentos>
      <Segmentos>
      <label>{LABELS.ADDRESS[languaje]}</label>
      <Input placeholder={LABELS.ADDRESS[languaje]} onChange={handleChange} name='address' value={state.address} /></Segmentos>

    </Cuerpo>
    <Cuerpo>
    <Segmentos value={'60%'}>
        <label>{LABELS.DESCRIPTION[languaje]}</label>
        <Input placeholder={LABELS.DESCRIPTION[languaje]}  onChange={handleChange}  name='description' value={state.description} /></Segmentos>
      {/* <Segmentos value={'40%'}><label>{LABELS.PROFILE[languaje]}</label>
      <SelectIcon placeholder={LABELS.PROFILE[languaje]} name='type' handleChange={handleSelectChange}  options={INSTITUTIONTYPE}/></Segmentos> */}
    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}