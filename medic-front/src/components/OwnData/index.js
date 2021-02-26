import React, {useState, useEffect, useContext, Fragment} from 'react'
import {Context} from "../../Context"
import { useQuery, NetworkStatus } from '@apollo/client'
import { useForm } from "react-hook-form";
import { GET_PROFESSIONAL_FOR_ID } from '../../container/Querys'
import {SchemaUser} from '../Skeletons/SchemaUser'
import { Form, Title, Cuerpo } from './style'
import { SubmitButton } from "../Buttons/SubmitButton";
import { FormInput } from "../SimpleComponent/FormInput"
import { FormSelect } from "../SimpleComponent/FormSelect"
import { PROFILETYPE } from '../../constants'
import { useLoginVerify } from '../../hooks/useLoginVerify'
export const OwnData = () => {
  const [disabled, setDisabled] = useState(true)
    const {userType} = useContext(Context)   
    useLoginVerify(userType)
    const { register, errors, handleSubmit, reset, control } = useForm({});
    const { loading, error, data, refetch, networkStatus } = useQuery(GET_PROFESSIONAL_FOR_ID,
        {variables: { id_prof: userType._id }, notifyOnNetworkStatusChange: true, suspend: false,
        onCompleted: data => {
            const {getProfessional} = data
            setstate(getProfessional)
        }
     },
     { fetchPolicy: 'cache-and-network' }
     )
  
     useEffect(() => {
        refetch(state)
      }, [data]);

      const [state, setstate] = useState({
        email: userType.email,
        firstName: userType.firstName,
        identifier: userType.identifier,
        lastName: userType.lastName,
        matricula: userType.matricula,
        phoneNumber: userType.phoneNumber,
        profile: userType.profile,
      })
      
      const handleChange = ({name, value}) => {
        setstate({
          ...state,
          [name]:value
        })
      }


      const onSubmit = () => {
        if(disabled){
          setDisabled(false)
        }else{
          setDisabled(true)
          console.log(state)
        } 

       
    }
   const renderCards = (user) => {

    if (networkStatus === NetworkStatus.refetch || loading) return <SchemaUser cantidad={4} />
    if (!loading) {
          return <Fragment>  
          <Form onSubmit={handleSubmit(onSubmit)}>        
              <Title>{disabled ? 'Datos' : 'Editar' }</Title>
              <Cuerpo>
                <FormInput name='firstName' value={state.firstName} handle={handleChange}
                 disabled={disabled} type='text' placeholder='Nombre' control={control}/>

                <FormInput name='lastName' value={state.lastName} handle={handleChange}
                 disabled={disabled} type='text' placeholder='Apellido' control={control}/>

                <FormInput name='email' value={state.email} handle={handleChange}
                 disabled={disabled} type='text' placeholder='Email' control={control}/>

                <FormInput name='identifier' value={state.identifier} handle={handleChange}
                 disabled={disabled} type='text' placeholder='Usuario' control={control}/>

              </Cuerpo><Cuerpo>
                <FormInput name='matricula' value={state.matricula} handle={handleChange}
                 disabled={disabled} type='text' placeholder='Matricula' control={control}/>

                <FormInput name='phoneNumber' value={state.phoneNumber} handle={handleChange}
                 disabled={disabled} type='number' placeholder='Teléfono' control={control}/>

                 <FormSelect valor={state.profile} options={PROFILETYPE} handle={handleChange}
                 disabled={disabled} placeholder='Perfil' />
            </Cuerpo>
         <Cuerpo>
         {/* <Segmentos><SelectIcon placeholder='Estado Inicial' name='status' handleChange={handleSelectChange} options={STATE}/></Segmentos> */}
         {/* <Segmentos><SelectIcon placeholder='Icono' valor={state.icon} name='icon' handleChange={handleSelectChange} options={ICONS}/></Segmentos> */}
           
              </Cuerpo>
              {disabled
              ? <SubmitButton>Editar</SubmitButton>
              : <SubmitButton>Guardar</SubmitButton>}
             
          </Form>
        </Fragment>
      }
   }


   return <div>
      {
        renderCards(userType)
      }
   </div>

}
