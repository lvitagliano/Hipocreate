import React from 'react'
import { Cuerpo } from "./style";
import { useQuery } from '@apollo/client';
import { Cards } from './cards';
import { GET_PATIENTS } from '../../../container/Querys'

export const ListOfPatients = () => {
   const { loading, error, data } = useQuery(GET_PATIENTS)

   const renderCards = (info) => {
      if (!loading) {
         const { getPatients = [] } = info
         return getPatients.map(patient => {
            return <Cards key={patient._id} patient={patient} />
         }
         )
      }
   }

   return <Cuerpo>
      {
         renderCards(data)
      }
   </Cuerpo>

}



