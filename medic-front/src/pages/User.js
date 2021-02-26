import React, { useContext, Fragment} from 'react'
import { Context } from '../Context'
import { Fragmento } from './style'
import { SubmitButton } from "../components/Buttons/SubmitButton";
export const User = () => {
    const { removeAuth } = useContext(Context)

    return (
        <Fragmento>
            <h1>Its Users</h1>
            <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
        </Fragmento>
    )
}
