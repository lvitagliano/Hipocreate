import React, { useEffect , useContext, Fragment, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useHistory } from "react-router-dom"
import moment from 'moment';
import { Error, Form, Input, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { EDIT_PATIENT } from '../../../container/Mutation';
import { GET_PATIENTS_FOR_ID } from '../../../container/Querys'
import { LABELS, MONTHS } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'

export const UpdatePacient  = () => {
  const history = useHistory()
  const ruta = history.location.pathname;
  const titulo = ruta.split('/',);
  const id_pac = titulo[2];
  const [state, setstate] = useState({
    firstName:'',
    lastName:'',
    dni:'',
    email:'',
    phoneNumber:'',
    personalAddress:'',
    city:'',
    year: '1920',
    month: '1',
    day: '1',
    country:'Argentina'
  })
  const [id, setId] = useState('')
  const {languaje} = useContext(Context)
  const [editPatient] = useMutation(EDIT_PATIENT);
  const { loading, error, data } = useQuery(GET_PATIENTS_FOR_ID,
    { variables : {id_pac}}
  )

  const DAYS = useDay()
  const MONTH = useMonths(MONTHS[languaje])
  const YEAR = useYears()

  useEffect(() => {   
    if(!loading){
      const { getPatient = {} } = data
      if(getPatient != null){
      setId(id_pac)

      setstate({
            ...state,
          email: getPatient.email ,
          firstName: getPatient.firstName ,
          lastName: getPatient.lastName ,
          day: getPatient.day ,
          month: getPatient.month ,
          year: getPatient.year ,
          os: getPatient.os ,
          country: getPatient.country ,
          city: getPatient.city ,
          personalAddress: getPatient.personalAddress ,
          phoneNumber: getPatient.phoneNumber ,
          dni: getPatient.dni ,
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

const onSubmits = (create_pat) => {
  const variables = {id, create_pat}
  editPatient({ variables })
  history.push("/patients");
  }

return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.PACIENT[languaje]}</Title>
      <Cuerpo>
      <Segmentos>
        <label>{LABELS.FIRSTNAME[languaje]}</label>
        <Input placeholder={LABELS.FIRSTNAME[languaje]} onChange={handleChange}  name='firstName'  value={state.firstName}/></Segmentos>
      <Segmentos>
      <label>{LABELS.LASTNAME[languaje]}</label>
      <Input placeholder={LABELS.LASTNAME[languaje]} onChange={handleChange} name='lastName' value={state.lastName} /></Segmentos>
      <Segmentos>
      <label>{LABELS.DNI[languaje]}</label>
      <Input placeholder={LABELS.DNI[languaje]} onChange={handleChange}  name='dni' value={state.dni} /></Segmentos>
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
      <Segmentos ><label>{LABELS.DAY[languaje]}</label>
      <SelectIcon placeholder={LABELS.DAY[languaje]} name='day' handleChange={handleSelectChange} options={DAYS} valuePre={state.day} /></Segmentos>
      <Segmentos><label>{LABELS.MONTH[languaje]}</label>
      <SelectIcon placeholder={LABELS.MONTH[languaje]} name='month' handleChange={handleSelectChange}  options={MONTH} valuePre={state.month}/></Segmentos>
      <Segmentos><label>{LABELS.YEAR[languaje]}</label>
      <SelectIcon placeholder={LABELS.YEAR[languaje]} name='year' handleChange={handleSelectChange} options={YEAR} valuePre={state.year}/></Segmentos>
    </Cuerpo>
    </Cuerpo>
    <Cuerpo>
      <Segmentos value={'70%'}>
        <label>{LABELS.ADDRESS[languaje]}</label>
        <Input placeholder={LABELS.ADDRESS[languaje]} onChange={handleChange}  name='personalAddress' value={state.personalAddress} /></Segmentos>
        <Segmentos value={'30%'}><label>{LABELS.CITY[languaje]}</label>
      <Input placeholder={LABELS.CITY[languaje]} onChange={handleChange} name='city' value={state.city} /></Segmentos>

    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}