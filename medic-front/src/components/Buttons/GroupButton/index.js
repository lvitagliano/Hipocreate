import React, {Fragment} from 'react'
import { groupMenu } from '../../../constants';
import { Buttons } from './button'
import { Div } from './style'

export const GroupButton = () => {
    const renderGroup = (items) => (
        <Div>
{
    items.map(item => 
        <Buttons key={item.title}>{item.icon}{item.title}</Buttons>
        )
}
        </Div>
        
    )

return (
    <Fragment>
        {
            renderGroup(groupMenu)
        }
    </Fragment>
)


}