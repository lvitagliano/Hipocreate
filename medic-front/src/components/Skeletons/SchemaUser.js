import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { Div, Cuerpo } from "./style";

export const SchemaUser = ({ cantidad = 1 }) => {
    let countArray = Array(cantidad).fill(1);
    const renderSchemas = () => (
        countArray.map((item, index) =>
            <Div key={index}>
                <Skeleton variant="rect" height={118} />
                <Skeleton variant="text" height={40} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </Div>
        )
    )

    return <Cuerpo >
        {
            renderSchemas()
        }
    </Cuerpo>

}
