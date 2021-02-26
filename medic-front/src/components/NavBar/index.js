import React, { useContext, useState, Fragment } from 'react'
import { Button, Nav, FirstLine, Title } from "./style"
import { Logo } from "../Logo";
import { FiMenu } from "react-icons/fi";
import {Context} from "../../Context"
import { useHistory } from "react-router-dom";
import { listHead } from '../../constants/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const SIZE = '32px'
export const NavBar = () => {
    const {languaje, setLanguaje} = useContext(Context)
    const item = { 'item': <FiMenu size={SIZE} />, 'title': 'Pepe' }
    const [moveOn, setMoveOn] = useState(false)
    const history = useHistory();
    const head = window.location.pathname.split('/')
    let theTitle = ''

    if(head[2]){
        theTitle = listHead.filter((item, index) => item.enlace === head[2])
        .map((item, index) => (item[languaje]))
    } else {
        theTitle = listHead.filter((item) => item.enlace === head[1])
        .map((item, index) => (item[languaje]))
    }


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };


    const handleChange = (event) => {
        setLanguaje(event.target.value)
    }


    const handleRouteClick = (data) => {
        handleClose()
        history.push("/" + data);
      };

      const handleLogoutClick = (data) => {
        window.sessionStorage.removeItem('token')
        window.location.href = "/";
      };

    const renderList = (listHead) => (
        <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
            <MenuItem key={item.title} onClick={() => handleRouteClick('')}>Inicio</MenuItem>  
        {   
         listHead.map((item, index) => 
            <MenuItem key={index} onClick={() => handleRouteClick(item.enlace)}>{item[languaje]}</MenuItem>  
        )
        }
        <MenuItem onClick={() => handleLogoutClick()}>Cerrar Sesión</MenuItem> 
        </Menu>
    )

        return (
        <Fragment>
            <Nav>
                <FirstLine>
                    <Logo />
                    <Title>{theTitle}</Title>
                    <select value={languaje} onChange={handleChange}>
                    <option value="ES">Español</option>
                    <option value="EN">Ingles</option>
                    </select>
                    <Button onClick={handleClick}>{item.item}</Button>
                </FirstLine>
            </Nav>
            {
                    renderList(listHead)
                }
        </Fragment>
    )
}
