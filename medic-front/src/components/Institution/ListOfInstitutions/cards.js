import React, { useContext, lazy } from 'react'
import { useHistory } from "react-router-dom"
import { Div, Title, Ul, Li, Footer  } from "./style";
import { Icons } from '../../Icons';
import { EditButton } from '../../Buttons/EditButton';
import { AiFillEdit } from "react-icons/ai";
import { LABELS } from '../../../constants/labels';
import {Context} from "../../../Context"


export const Cards = ({institution}) => {

   const history = useHistory()
   const {languaje} = useContext(Context)
    return (
        <Div key={institution._id}>
        <Title>{institution.name}</Title>
        <br/>
        <Ul>
           <Li><b>{LABELS.DESCRIPTION[languaje]}:</b> {institution.description}</Li>
           <Li><b>{LABELS.ADDRESS[languaje]}:</b> {institution.address}</Li>
           <Li><b>{LABELS.TYPE[languaje]}:</b> {institution.type}</Li>
        </Ul>
        <Footer>
        <EditButton onClick={() => history.push(`/institution-update/${institution._id}`)}> 
        <AiFillEdit size={28}/>
        </EditButton>
        </Footer>
     </Div>
    )
}