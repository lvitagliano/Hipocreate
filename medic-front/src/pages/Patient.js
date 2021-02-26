import React, { useContext }  from 'react'
import { 
  PATIENTS, 
  PATIENTS_NEW,
  PATIENTS_UPDATE
  } from '../constants/internalRoutes'
  import { listHead } from '../constants/index';
  import {Context} from "../Context"


import { Fragmento } from './style'
import { ListOfPatients } from "../components/Patient/ListOfPatients";
import { NewAPacient } from "../components/Patient/newAPacient";
import { UpdatePacient } from "../components/Patient/updatePacient";
import { Title } from '../components/Title'

const PatientComponent = ({ match }) => {
  const {languaje, setLanguaje} = useContext(Context)
    return (
        <Fragmento>

            {
              match.path === PATIENTS && <ListOfPatients />
            }
            {
              match.path === PATIENTS_NEW  && <NewAPacient />
            }
            {
              match.path === PATIENTS_UPDATE && <UpdatePacient />
            }
            
        </Fragmento>
    )
}
    export const Patient = React.memo(PatientComponent, (prevProps, props) => {
    return prevProps.id === props.id
  })