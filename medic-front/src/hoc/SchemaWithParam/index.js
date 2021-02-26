import React, {Fragment, useState} from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_SCHEMA_FOR_ID = gql`
query getSchema($id: ID) {
  getSchema(id: $id) {
    tree {
      event {
        _id
        name
        description
        status
        icon
      }
    }
  }
}
`

export function EventsVal(id) {
  let alpha = ''
  if(id.length > 0){
    const { loading, error, data } = useQuery(GET_SCHEMA_FOR_ID, {
      variables: {id},
    });
    if(!loading){
      const { getSchema = {} } = data
      if(getSchema != null){
        alpha = getSchema.schema
      }
    
    }
  }
 
}