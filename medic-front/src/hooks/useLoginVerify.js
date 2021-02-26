import React from 'react'
import { useHistory } from "react-router-dom"

export function useLoginVerify(user) {
    const history = useHistory()
    if(user._id === ""){
        history.push('/login')
    }else{
        console.log('usuario', user)
    }
}