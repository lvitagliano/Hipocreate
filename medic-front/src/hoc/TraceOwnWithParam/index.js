import React, {Fragment, useState} from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_TRACE_OWN_FOR_TRACE = gql`
query getTraceOwn($traceID: ID) {
  getTraceOwn(traceID: $traceID) {
    _id
    traceID
    schema
    item
  }
}`

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

function EventsVal(id) {
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

export function Hello(traceID) {
  let alpha = ''
  const { loading, error, data } = useQuery(GET_TRACE_OWN_FOR_TRACE, {
    variables: {traceID},
  });
  if(!loading){
    const { getTraceOwn = {} } = data
    if(getTraceOwn != null){
      alpha = getTraceOwn.schema
      if(getTraceOwn.schema.length > 0){
      EventsVal(alpha)
      }
    }
  
  }
  return alpha
}