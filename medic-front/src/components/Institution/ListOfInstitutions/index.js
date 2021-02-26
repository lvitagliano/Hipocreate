import React from 'react'
import { Cuerpo } from "./style";
import { useQuery } from '@apollo/client';
import { Cards } from './cards';
import { GET_INSTITUTIONS } from '../../../container/Querys'

export const ListOfInstitutions = () => {
   const { loading, error, data } = useQuery(GET_INSTITUTIONS)

   const renderCards = (info) => {
      if (!loading) {
         const { getInstitucions = [] } = info
         return getInstitucions.map(institution => {
            return <Cards key={institution._id} institution={institution} />
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



