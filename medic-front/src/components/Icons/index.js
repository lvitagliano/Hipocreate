import React, { lazy } from 'react'
import { Div } from './style'
import { Colors } from '../../constants'
export const Icons = ({ sizeIcon = '36', sizeDiv = '45px', status = 'Initial', icon = 'Maiz'}) => {
    const defoultIcon = `./${icon}`
    const MyIcon = lazy(() => import(`${defoultIcon}`));   
    const colorMatch = Colors.filter(Item => Item.stat === status).map((x) => {return x.color});

    return (<Div size={sizeDiv} color={colorMatch}><MyIcon size={sizeIcon} /></Div>)
}
