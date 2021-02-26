import React, { Fragment } from 'react'
import { Titulo, Fragmento, Button } from './style'
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'

export const Title = ({title, btnTitle}) => {
    const titulo = (`${title}`)
    const route = `${btnTitle}`

    const history = useHistory();

    const handleRouteClick = (data) => {
        history.push(data);
      };

    return (
        <Fragmento>
           <Helmet>
                <title>Tracking - {titulo}</title>
                <meta name={titulo} content='Con Tracking puedes hacer seguimiento los productos' />
            </Helmet>
            <Button onClick={() => handleRouteClick(route)}>
                {titulo}
            </Button>
        </Fragmento>
    )
}
