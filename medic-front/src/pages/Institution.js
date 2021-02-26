import React, { useContext }  from 'react'
import { 
  INSTITUTIONS,
  INSTITUTION_NEW,
  INSTITUTION_UPDATE
  } from '../constants/internalRoutes'
  import { listHead } from '../constants/index';
  import {Context} from "../Context"


import { Fragmento } from './style'
import { ListOfInstitutions } from "../components/Institution/ListOfInstitutions";
import { NewInstitution } from "../components/Institution/newInstitution";
import { UpdateInstitution } from "../components/Institution/updateInstitution";
import { Title } from '../components/Title'

const InstitutionComponent = ({ match }) => {
  const {languaje, setLanguaje} = useContext(Context)
    return (
        <Fragmento>
            {
              match.path === INSTITUTIONS && <ListOfInstitutions />
            }
            {
              match.path === INSTITUTION_NEW  && <NewInstitution />
            }
            {
              match.path === INSTITUTION_UPDATE && <UpdateInstitution />
            }
            
        </Fragmento>
    )
}
    export const Institution = React.memo(InstitutionComponent, (prevProps, props) => {
    return prevProps.id === props.id
  })