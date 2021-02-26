import React, { useContext, lazy } from 'react'
import { useHistory } from "react-router-dom"
import { Div, Title, Ul, Li, Footer  } from "./style";
import { Icons } from '../../Icons';
import { EditButton } from '../../Buttons/EditButton';
import { AiFillEdit } from "react-icons/ai";
import { LABELS } from '../../../constants/labels';
import {Context} from "../../../Context"


export const Cards = ({patient}) => {

   const history = useHistory()
   const {languaje} = useContext(Context)
   const constBirthday = patient.day && patient.day 
    return (
        <Div key={patient._id}>
        <Title>{patient.firstName} {patient.lastName}</Title>
        <br/>
        <Ul>
           <Li><b>{LABELS.BIRTHDAY[languaje]}:</b> {patient.day ? patient.day : 1}/{patient.month? patient.month : 1}/{patient.year? patient.year : 1960}</Li>
           <Li><b>{LABELS.DNI[languaje]}:</b> {patient.dni}</Li>
           <Li><b>{LABELS.PHONE[languaje]}:</b> {patient.phoneNumber}</Li>
           <Li><b>{LABELS.EMAIL[languaje]}:</b> {patient.email}</Li>
           <Li><b>{LABELS.ADDRESS[languaje]}:</b> {patient.personalAddress}</Li>
           <Li><b>{LABELS.CITY[languaje]}:</b> {patient.city}</Li>
           <Li><b>{LABELS.COUNTRY[languaje]}:</b> {patient.country}</Li>
           <Li><b>{LABELS.OS[languaje]}:</b> {patient.os}</Li>
        </Ul>
        <Footer>
        <EditButton onClick={() => history.push(`/patient-update/${patient._id}`)}> 
        <AiFillEdit size={28}/>
        </EditButton>
        </Footer>
     </Div>
    )
}


// nac
// firstName
// lastName
// os
// country
// city
// personalAddress
// phoneNumber
// dni