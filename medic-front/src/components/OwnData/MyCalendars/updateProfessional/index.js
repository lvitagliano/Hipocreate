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
import { GET_PROFESSIONAL_FOR_ID } from '../../../container/Querys'
import { LABELS, PROFILE } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'

export const UpdateProfessional  = () => {
  const history = useHistory()
  const ruta = history.location.pathname;
  const titulo = ruta.split('/',);
  const id_prof = titulo[2];
  const [state, setstate] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    profile:'',
    matricula:''
  })
  const [id, setId] = useState('')
  const {languaje} = useContext(Context)
  const [editProfessional] = useMutation(EDIT_PROFESSIONAL);
  const { loading, error, data } = useQuery(GET_PROFESSIONAL_FOR_ID,
    { variables : {id_prof}}
  )

  const MONTH = useMonths(PROFILE[languaje])

  useEffect(() => {   
    if(!loading){
      const { getProfessional = {} } = data
      if(getProfessional != null){
      setId(id_prof)

      setstate({
            ...state,
          email: getProfessional.email ,
          firstName: getProfessional.firstName ,
          lastName: getProfessional.lastName ,
          profile: getProfessional.profile ,
          phoneNumber: getProfessional.phoneNumber ,
          matricula: getProfessional.matricula ,
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

const onSubmits = (create_prof) => {
  const variables = {id, create_prof}
  editProfessional({ variables })
  history.push("/professionals");
  }

return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.PROFESSIONAL[languaje]}</Title>
      <Cuerpo>
      <Segmentos>
        <label>{LABELS.FIRSTNAME[languaje]}</label>
        <Input placeholder={LABELS.FIRSTNAME[languaje]} onChange={handleChange}  name='firstName'  value={state.firstName}/></Segmentos>
      <Segmentos>
      <label>{LABELS.LASTNAME[languaje]}</label>
      <Input placeholder={LABELS.LASTNAME[languaje]} onChange={handleChange} name='lastName' value={state.lastName} /></Segmentos>
    </Cuerpo>
    <Cuerpo>
    <Segmentos value={'60%'}>
        <label>{LABELS.EMAIL[languaje]}</label>
        <Input placeholder={LABELS.EMAIL[languaje]} type='email' onChange={handleChange}  name='email' value={state.email} /></Segmentos>
     
    <Cuerpo value={'40%'}>
    <Segmentos>
      <label>{LABELS.PHONE[languaje]}</label>
      <Input placeholder={LABELS.PHONE[languaje]} onChange={handleChange} name='phoneNumber' value={state.phoneNumber} /></Segmentos>
     
    </Cuerpo>
    <Cuerpo value={'50%'}>
      <Segmentos><label>{LABELS.PROFILE[languaje]}</label>
      <SelectIcon placeholder={LABELS.PROFILE[languaje]} name='month' handleChange={handleSelectChange}  options={MONTH} valuePre={state.month}/></Segmentos>
    </Cuerpo>
    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}