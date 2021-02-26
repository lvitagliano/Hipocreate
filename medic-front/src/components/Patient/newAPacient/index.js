import React, { useContext,Fragment, useState} from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom"
import moment from 'moment';
import { Error, Form, Input, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { CREATE_PATIENT } from '../../../container/Mutation';
import { LABELS, MONTHS } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'

export const NewAPacient  = () => {
  const history = useHistory()
  const {languaje} = useContext(Context)
  const [createPatient, { data, loading, error, }] = useMutation(CREATE_PATIENT);
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

  const DAYS = useDay()
  const MONTH = useMonths(MONTHS[languaje])
  const YEAR = useYears()

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

  const variables = {create_pat}
  createPatient({ variables })
  history.push("/patients");
  }

return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.PACIENT[languaje]}</Title>
      <Cuerpo>
      <Segmentos>
        <label>{LABELS.FIRSTNAME[languaje]}</label>
        <Input placeholder={LABELS.FIRSTNAME[languaje]} onChange={handleChange}  name='firstName'  /></Segmentos>
      <Segmentos>
      <label>{LABELS.LASTNAME[languaje]}</label>
      <Input placeholder={LABELS.LASTNAME[languaje]} onChange={handleChange} name='lastName'  /></Segmentos>
      <Segmentos>
      <label>{LABELS.DNI[languaje]}</label>
      <Input placeholder={LABELS.DNI[languaje]} onChange={handleChange}  name='dni'  /></Segmentos>
    </Cuerpo>
    <Cuerpo>
    <Segmentos value={'60%'}>
        <label>{LABELS.EMAIL[languaje]}</label>
        <Input placeholder={LABELS.EMAIL[languaje]} type='email' onChange={handleChange}  name='email'  /></Segmentos>
     
    <Cuerpo value={'40%'}>
    <Segmentos>
      <label>{LABELS.PHONE[languaje]}</label>
      <Input placeholder={LABELS.PHONE[languaje]} onChange={handleChange} name='phoneNumber'  /></Segmentos>
     
    </Cuerpo>
    <Cuerpo value={'50%'}>
      <Segmentos ><label>{LABELS.DAY[languaje]}</label>
      <SelectIcon placeholder={LABELS.DAY[languaje]} name='day' handleChange={handleSelectChange} options={DAYS}/></Segmentos>
      <Segmentos><label>{LABELS.MONTH[languaje]}</label>
      <SelectIcon placeholder={LABELS.MONTH[languaje]} name='month' handleChange={handleSelectChange}  options={MONTH}/></Segmentos>
      <Segmentos><label>{LABELS.YEAR[languaje]}</label>
      <SelectIcon placeholder={LABELS.YEAR[languaje]} name='year' handleChange={handleSelectChange} options={YEAR}/></Segmentos>
    </Cuerpo>
    </Cuerpo>
    <Cuerpo>
      <Segmentos value={'70%'}>
        <label>{LABELS.ADDRESS[languaje]}</label>
        <Input placeholder={LABELS.ADDRESS[languaje]} onChange={handleChange}  name='personalAddress'  /></Segmentos>
        <Segmentos value={'30%'}><label>{LABELS.CITY[languaje]}</label>
      <Input placeholder={LABELS.CITY[languaje]} onChange={handleChange} name='city'  /></Segmentos>

    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}