import React, { useContext, Fragment, useState } from 'react'
import { H2, DivStyle, Button, Hr } from "./style"
import { listMenu } from "../../constants";
import { Avatar } from "../Avatar";
import { useHistory } from "react-router-dom";
import {Context} from "../../Context"

export const Menu = ({move, setVisual}) => {
    const {languaje} = useContext(Context)
    const history = useHistory();
    const handleRouteClick = (data) => {
        history.push("/" + data);
        setVisual(false)
      };

    const renderList = (listMenu) => (
        listMenu.map((item, index) => 
            <Fragment key={index}>
                 <Hr />
                <Button  onClick={() => handleRouteClick(item.enlace)}>{item[languaje]}</Button>
            </Fragment>
        )
    )

    return (
        <Fragment>
            <DivStyle move={move}>
                <Avatar size='100px'/>
                <H2>User name</H2>
                {
                    renderList(listMenu)
                }
                 <Hr />
            </DivStyle>
        </Fragment>
       
    )
}
