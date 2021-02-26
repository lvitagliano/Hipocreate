
import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
query getCurrentUser($token: String) {
  getCurrentUser(token: $token){
    _id
    email
    firstName
    lastName
    profile
    matricula
    phoneNumber
    identifier
  }
}
`

const GET_PROFESSIONAL_FOR_ID = gql`
query getProfessional($id_prof: ID!) {
  getProfessional(id:$id_prof) {
     _id
    email
    firstName
    lastName
    profile
    matricula
    phoneNumber
    identifier
    institution{
      name
    }
    calendar{
      description
    }
    relationCalendar {
      _id
      institution{
      _id
      name
      description
      address
    }
    calendar{
      _id
      day
      description
    }
    }
    createdOn
    modifiedOn
  }
}`

const GET_PROFESSIONAL = gql`
query getProfessionals {
  getProfessionals {
     _id
    email
    firstName
    lastName
    profile
    matricula
    phoneNumber
    identifier
    institution{
      name
    }
    createdOn
    modifiedOn
  }
}`

const GET_PATIENTS = gql`
query getPatients {
  getPatients {
    _id
    day
    month
    year
    firstName
    lastName
    os
    country
    city
    personalAddress
    phoneNumber
    dni
    createdOn
    modifiedOn
  }
}`

const GET_PATIENTS_FOR_ID = gql`
query getPatient($id_pac: ID!) {
  getPatient(id:$id_pac) {
    _id
    firstName
    lastName
    email
    day
    month
    year
    os
    country
    city
    personalAddress
    phoneNumber
    dni
    createdOn
    modifiedOn
  }
}`

const GET_INSTITUTIONS = gql`
query getInstitucions {
  getInstitucions {
    _id
    name
    description
    address
    type
    createdOn
    modifiedOn
  }
}`

const GET_INSTITUTION_FOR_ID = gql`
query getInstitucion($id_ins: ID!) {
  getInstitucion(id:$id_ins){
    _id
    name
    description
    address
    type
    createdOn
    modifiedOn
  }
}`

const GET_CALENDARS = gql`
query getCalendars {
  getCalendars {
     _id
    description
    day
    createdOn
    modifiedOn
  }
}`

const GET_CALENDARS_FOR_ID = gql`
query getCalendar($id_cal: ID!) {
  getCalendar(id:$id_cal){
     _id
    description
    day
    createdOn
    modifiedOn
  }
}`

const GET_CONSULTATIONS = gql`
query getConsultations {
  getConsultations {
    _id
    professional{
      firstName
    }
  patient{
    firstName
  }
  diagnosis
  extended
  medications
  indications
  } 
}`

const GET_CONSULTATION_FOR_ID = gql`
query getConsultation($id_con: ID!) {
  getConsultation(id:$id_con) {
    _id
    professional{
      firstName
    }
  patient{
    firstName
  }
  diagnosis
  extended
  medications
  indications
  } 
}`

export { 
  GET_CURRENT_USER,
  GET_PROFESSIONAL_FOR_ID,
  GET_PROFESSIONAL,
  GET_PATIENTS,
  GET_PATIENTS_FOR_ID,
  GET_INSTITUTIONS,
  GET_INSTITUTION_FOR_ID, 
  GET_CALENDARS, 
  GET_CALENDARS_FOR_ID, 
  GET_CONSULTATIONS, 
  GET_CONSULTATION_FOR_ID
 }