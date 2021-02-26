import React, { useContext }  from 'react'
import { 
  PROFESSIONALS,
  PROFESSIONAL_NEW,
  PROFESSIONAL_UPDATE
  } from '../constants/internalRoutes'
  import { listHead } from '../constants/index';
  import {Context} from "../Context"


import { Fragmento } from './style'
import { ListOfProfessionals } from "../components/Professional/ListOfProfessionals";
import { NewProfessional } from "../components/Professional/newProfessional";
import { UpdateProfessional } from "../components/Professional/updateProfessional";
import { Title } from '../components/Title'

const ProfessionalComponent = ({ match }) => {
  const {languaje, setLanguaje} = useContext(Context)
    return (
        <Fragmento>
            {
              match.path === PROFESSIONALS && <ListOfProfessionals />
            }
            {
              match.path === PROFESSIONAL_NEW  && <NewProfessional />
            }
            {
              match.path === PROFESSIONAL_UPDATE && <UpdateProfessional />
            }
            
        </Fragmento>
    )
}
    export const Professional = React.memo(ProfessionalComponent, (prevProps, props) => {
    return prevProps.id === props.id
  })