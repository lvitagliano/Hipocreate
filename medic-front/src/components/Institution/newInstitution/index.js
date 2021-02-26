import React, { useContext,Fragment, useState} from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom"
import moment from 'moment';
import { Error, Form, Input, Title, Cuerpo, Segmentos } from './style'
import { SubmitButton } from "../../Buttons/SubmitButton";
import { SelectIcon } from "../../Buttons/SelectIcon";
import {STATE, ACTIVITYTYPE} from '../../../constants'
import {ICONS} from '../../../constants/icons' 
import { CREATE_INSTITUTION } from '../../../container/Mutation';
import { LABELS, PROFILE, INSTITUTIONTYPE } from '../../../constants/labels';
import {Context} from "../../../Context"
import { useDay, useMonths, useYears } from '../../../hooks/useBirthDay'

export const NewInstitution  = () => {
  const history = useHistory()
  const {languaje} = useContext(Context)
  const [createInstitucion, { data, loading, error, }] = useMutation(CREATE_INSTITUTION);
  const [state, setstate] = useState({
    name:'',
    description:'',
    address:'',
    type:''
  })

  const INSTITUTIONTYPE = useMonths(PROFILE[languaje])

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

  const onSubmits = ($create_inst) => {
  const variables = {$create_inst}
  createInstitucion({ variables })
  history.push("/institutions");
  }


return <Fragment>  
<Form disabled={loading} onSubmit={handleSubmit}>      
      <Title>{LABELS.NEW[languaje]} {LABELS.INSTITUTION[languaje]}</Title>
      <Cuerpo>
      <Segmentos>
        <label>{LABELS.NAME[languaje]}</label>
        <Input placeholder={LABELS.NAME[languaje]} onChange={handleChange}  name='name'  /></Segmentos>
      <Segmentos>
      <label>{LABELS.ADDRESS[languaje]}</label>
      <Input placeholder={LABELS.ADDRESS[languaje]} onChange={handleChange} name='address'  /></Segmentos>

    </Cuerpo>
    <Cuerpo>
    <Segmentos value={'60%'}>
        <label>{LABELS.DESCRIPTION[languaje]}</label>
        <Input placeholder={LABELS.DESCRIPTION[languaje]} onChange={handleChange}  name='description'  /></Segmentos>
      <Segmentos value={'40%'}><label>{LABELS.PROFILE[languaje]}</label>
      <SelectIcon placeholder={LABELS.PROFILE[languaje]} name='type' handleChange={handleSelectChange}  options={INSTITUTIONTYPE}/></Segmentos>
    </Cuerpo>
      <SubmitButton disabled={loading}>{LABELS.BTNSAVE[languaje]}</SubmitButton>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
}