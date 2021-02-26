import React, { useEffect, useContext, Suspense, Fragment } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import {Context} from "../Context"
import { GET_CURRENT_USER } from '../container/Querys'

export function useLoguedUser(token) {
    const {isAuth, userType, setUserType} = useContext(Context) 

    const [getCurrentUser, { called, loading, error, data }] = useQuery(GET_CURRENT_USER,
        { onCompleted: data => {
            const {getCurrentUser} = data
            setUserType({
                ...userType,
                _id: getCurrentUser._id,
                email: getCurrentUser.email,
                firstName: getCurrentUser.firstName,
                lastName: getCurrentUser.lastName,
                profile: getCurrentUser.profile,
                matricula: getCurrentUser.matricula,
                phoneNumber: getCurrentUser.phoneNumber,
                identifier: getCurrentUser.identifier,
                type: getCurrentUser.type
            })
          }
        }
     )

     getCurrentUser({ variables: { token: token } })

     return userType

}