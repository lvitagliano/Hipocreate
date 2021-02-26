import React from 'react'
import { gql } from 'apollo-boost'

const AUTH = gql`
mutation auth($identifier: String, $password: String){
  auth(identifier: $identifier, password: $password)
}
`

const CREATE_PROFESSIONAL = gql`
mutation createProfessional($create_prof: InputProfessional!) {
  createProfessional(input: $create_prof) {
    _id
    email
    firstName
    lastName
    profile
    matricula
    phoneNumber
    identifier
    institution {
      name
    }
    calendar {
      description
    }
    createdOn
    modifiedOn
  }
}`

const EDIT_PROFESSIONAL = gql`
mutation editProfessional($id: ID!, $create_prof: InputProfessional!) {
  editProfessional(_id: $id, input: $create_prof) {
    _id
    email
    firstName
    lastName
    profile
    matricula
    phoneNumber
    institution {
      name
    }
    calendar {
      description
    }
    createdOn
    modifiedOn
  }
}`

const CREATE_PATIENT = gql`
mutation createPatient($create_pat: InputPatient!) {
  createPatient(input: $create_pat) {
    _id
    email
    firstName
    lastName
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

const EDIT_PATIENT = gql`
mutation editPatient($id: ID!, $create_pat: InputPatient!) {
  editPatient(_id: $id, input: $create_pat) {
    _id
    email
    firstName
    lastName
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

const CREATE_INSTITUTION = gql`
mutation createInstitucion($create_inst: InputInstitution) {
  createInstitucion(input: $create_inst) {
    _id
    name
    description
    address
    type
    createdOn
    modifiedOn
    createdOn
  }
}`

const EDIT_INSTITUTION = gql`
mutation editInstitucion($id_ins: ID!, $create_inst: InputInstitution!) {
  editInstitucion(_id: $id_ins, input: $create_inst) {
    _id
    name
    description
    address
    type
    createdOn
    modifiedOn
    createdOn
    modifiedOn
  }
}`

const CREATE_CALENDAR = gql`
mutation createCalendar($create_cal: InputCalendar!) {
  createCalendar(input: $create_cal) {
    _id
    description
    day
    modifiedOn
    createdOn
  }
}`

const EDIT_CALENDAR = gql`
mutation editCalendar($id_cal: ID!, $create_cal: InputCalendar!) {
  editCalendar(_id: $id_cal, input: $create_cal) {
    _id
    description
    day
    createdOn
    modifiedOn
  }
}`

const CREATE_CONSULTATION = gql`
mutation createConsultation($create_con: InputConsultation!) {
  createConsultation(input: $create_con) {
    _id
    professional {
      firstName
    }
    patient {
      firstName
    }
    diagnosis
    extended
    medications
    indications
  }
}`

const EDIT_CONSULTATION = gql`
mutation editConsultation($id_con: ID!, $create_con: InputConsultation!) {
  editConsultation(_id: $id_con, input: $create_con) {
    _id
    professional {
      firstName
    }
    patient {
      firstName
    }
    diagnosis
    extended
    medications
    indications
  }
}`

const ADD_INSTITUTION = gql`
mutation addInstitution($id_prof: ID!, $id_ins: ID!) {
  addInstitution(professionalID: $id_prof, institutionID: $id_ins) {
    _id
    institution {
      name
      description
      address
      type
      createdOn
      modifiedOn
    }
  }
}`

const ADD_CALENDAR = gql`
mutation addCalendar($id_prof: ID!, $id_cal: ID!) {
  addCalendar(professionalID: $id_prof, calendarID: $id_cal) {
    _id
    institution {
      name
      description
      address
      type
      createdOn
      modifiedOn
    }
  }
}`

export { 
AUTH,
CREATE_PROFESSIONAL, 
EDIT_PROFESSIONAL, 
CREATE_PATIENT, 
EDIT_PATIENT, 
CREATE_INSTITUTION, 
EDIT_INSTITUTION, 
CREATE_CALENDAR, 
EDIT_CALENDAR, 
CREATE_CONSULTATION, 
EDIT_CONSULTATION,
ADD_INSTITUTION,
ADD_CALENDAR }