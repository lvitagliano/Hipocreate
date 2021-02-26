import React from 'react'
import { Link } from './style'

export const Links = ({ children, enlace }) => {
    return <Link  to={enlace}>{children}</Link>
}