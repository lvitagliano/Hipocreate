import React, { useContext, lazy } from 'react'
import { useHistory } from "react-router-dom"
import { Div, Title, Ul, Li, Footer  } from "./style";
import { Icons } from '../../Icons';
import { EditButton } from '../../Buttons/EditButton';
import { AiFillEdit } from "react-icons/ai";
import { LABELS } from '../../../constants/labels';
import {Context} from "../../../Context"


export const Cards = ({professional}) => {

   const history = useHistory()
   const {languaje} = useContext(Context)
    return (
        <Div key={professional._id}>
        <Title>{professional.firstName} {professional.lastName}</Title>
        <br/>
        <Ul>
           <Li><b>{LABELS.PROFILE[languaje]}:</b> {professional.profile}</Li>
           <Li><b>{LABELS.PHONE[languaje]}:</b> {professional.phoneNumber}</Li>
           <Li><b>{LABELS.EMAIL[languaje]}:</b> {professional.email}</Li>
           <Li><b>{LABELS.MATRICULA[languaje]}:</b> {professional.matricula}</Li>
        </Ul>
        <Footer>
        <EditButton onClick={() => history.push(`/professional-update/${professional._id}`)}> 
        <AiFillEdit size={28}/>
        </EditButton>
        </Footer>
     </Div>
    )
}
