import React, { useContext,Fragment, useState} from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom"
import moment from 'moment';
import { Error, Form, InputText, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { CREATE_PROFESSIONAL } from '../../../container/Mutation';
import { LABELS, PROFILE } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'
import { IconButton, OutlinedInput, InputAdornment, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';

export const NewProfessional  = () => {
  const history = useHistory()
  const {languaje} = useContext(Context)
  const [createProfessional, { data, loading, error, }] = useMutation(CREATE_PROFESSIONAL);
  const [state, setstate] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    profile:'',
    matricula: '',
    identifier: '',
    password: ''
  })

  const [values, setValues] = useState({
    showPassword: false,
 });

 const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  const MONTH = useMonths(PROFILE[languaje])


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
  const variables = {create_prof}
  createProfessional({ variables })
  history.push("/professionals");
  }


return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.PROFESSIONAL[languaje]}</Title>
      <Cuerpo>
      <Segmentos>
        <label>{LABELS.FIRSTNAME[languaje]}</label>
        <InputText placeholder={LABELS.FIRSTNAME[languaje]} onChange={handleChange}  name='firstName'  /></Segmentos>
      <Segmentos>
      <label>{LABELS.LASTNAME[languaje]}</label>
      <InputText placeholder={LABELS.LASTNAME[languaje]} onChange={handleChange} name='lastName'  /></Segmentos>

    </Cuerpo>
    <Cuerpo>
    <Segmentos value={'60%'}>
        <label>{LABELS.EMAIL[languaje]}</label>
        <InputText placeholder={LABELS.EMAIL[languaje]} type='email' onChange={handleChange}  name='email'  /></Segmentos>
     
    <Cuerpo value={'40%'}>
    <Segmentos>
      <label>{LABELS.PHONE[languaje]}</label>
      <InputText placeholder={LABELS.PHONE[languaje]} onChange={handleChange} name='phoneNumber'  /></Segmentos>
     
    </Cuerpo>
    <Cuerpo value={'50%'}>
      <Segmentos><label>{LABELS.PROFILE[languaje]}</label>
      <SelectIcon placeholder={LABELS.PROFILE[languaje]} name='profile' handleChange={handleSelectChange}  options={MONTH}/></Segmentos>
    </Cuerpo>
    <Cuerpo value={'50%'}>
    <Segmentos>
      <label>{LABELS.MATRICULA[languaje]}</label>
      <InputText placeholder={LABELS.MATRICULA[languaje]} onChange={handleChange} name='matricula'  />
    </Segmentos>
    </Cuerpo>
    </Cuerpo>
    <Cuerpo>
    <Cuerpo value={'50%'}>
    <Segmentos>
      <label>Usuario</label>
      <InputText placeholder='Usuario' onChange={handleChange} name='identifier'  />
    </Segmentos>
    </Cuerpo>
    <Cuerpo value={'50%'}>
    <Segmentos>
               <FormControl fullWidth>
                  <label>Password</label>
                  <Cuerpo ><InputText type={values.showPassword ? 'text' : 'password'}  value={state.password} 
                  name="password" onChange={handleChange} placeholder="Password"/><div onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</div></Cuerpo>
               </FormControl>
    </Segmentos>
    </Cuerpo>
    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}