import React, { useContext }  from 'react'
import {Context} from "../Context"
import { Fragmento } from './style'
import { OwnData } from "../components/OwnData";

const MyPersonalDataComponent = ({ match }) => {
  const {languaje, setLanguaje} = useContext(Context)
    return (
        <Fragmento>
            <OwnData />
        </Fragmento>
    )
}
    export const MyPersonalData = React.memo(MyPersonalDataComponent, (prevProps, props) => {
    return prevProps.id === props.id
  })