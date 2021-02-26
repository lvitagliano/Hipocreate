import React, {Fragment} from 'react'
import { tabMenu } from '../../../constants';
import { Links } from './button'
import { Div } from './style'

export const TabButton = () => {

    const renderGroup = (items) => (
        <Div>
       { items.map(item => 
            <Links enlace={item.enlace}>{item.title}</Links>
        )}
        </Div>
       
    )

return (
    <Fragment>
        {
            renderGroup(tabMenu)
        }
    </Fragment>
)


}