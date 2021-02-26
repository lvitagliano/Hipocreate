import React from 'react'
import { Cuerpo } from "./style";
import { useQuery } from '@apollo/client';
import { Cards } from './cards';
import { GET_PROFESSIONAL } from '../../../container/Querys'

export const ListOfProfessionals = () => {
   const { loading, error, data } = useQuery(GET_PROFESSIONAL)

   const renderCards = (info) => {
      if (!loading) {
         const { getProfessionals = [] } = info
         return getProfessionals.map(professional => {
            return <Cards key={professional._id} professional={professional} />
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



