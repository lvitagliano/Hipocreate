import React, { useEffect, useContext, Suspense, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { GlobalStyle } from './styles/GlobalStyles'
import PrivateRoute from './components/Routes/PrivateRoute';
import { 
    LOGIN,
    ROUTE_HOME,
    PATIENTS,
    PATIENTS_NEW,
    PATIENTS_UPDATE,
    PROFESSIONALS,
    PROFESSIONAL_NEW,
    PROFESSIONAL_UPDATE,
    INSTITUTIONS,
    INSTITUTION_NEW,
    INSTITUTION_UPDATE,
    CONSULTATIONS,
    CONSULTATION_NEW,
    CONSULTATION_UPDATE,
    CALENDARS,
    CALENDAR_NEW,
    CALENDAR_UPDATE,
    MYIPERSONALDATA,
    MYIPERSONALDATA_NEW,
    MYIPERSONALDATA_UPDATE
 } from './constants/internalRoutes'
import { Home } from './pages/Home'
import { Patient } from './pages/Patient'
import { Professional } from './pages/Professional'
import { Institution } from './pages/Institution'
import { MyPersonalData } from './pages/MyPersonalData'
import {Context} from "./Context"
import { Navigation } from './pages/Navigation'
import { Login } from './pages/Login'
import { useLazyQuery } from '@apollo/client'
import { GET_CURRENT_USER } from './container/Querys'


export const App = () => {
    const {isAuth, activeId, userType, setUserType} = useContext(Context) 
    const [getCurrentUser, { called, loading, error, data }] = useLazyQuery(GET_CURRENT_USER,
        { onCompleted: data => {
            const {getCurrentUser} = data
            activeId(getCurrentUser)
          }
        }
     )

    useEffect(() => {
        if(isAuth){
         getCurrentUser({ variables: { token: isAuth } })
        }
      }, [isAuth])
    return (
        <Suspense fallback={<div></div>}>
             <Router>
            <GlobalStyle />
                <Route path='/' component={Navigation} />
                <Route path={LOGIN} component={Login} />
                <PrivateRoute path={ROUTE_HOME} session={isAuth} exact component={Home} />
                
                <PrivateRoute path={PROFESSIONALS} session={isAuth} component={Professional} />
                <PrivateRoute path={PROFESSIONAL_NEW} session={isAuth} component={Professional} />
                <PrivateRoute path={PROFESSIONAL_UPDATE} session={isAuth} component={Professional} />

                <PrivateRoute path={PATIENTS} session={isAuth} component={Patient} />
                <PrivateRoute path={PATIENTS_NEW} session={isAuth} component={Patient} />
                <PrivateRoute path={PATIENTS_UPDATE} session={isAuth} component={Patient} />

                <PrivateRoute path={INSTITUTIONS} session={isAuth} component={Institution} />
                <PrivateRoute path={INSTITUTION_NEW} session={isAuth} component={Institution} />
                <PrivateRoute path={INSTITUTION_UPDATE} session={isAuth} component={Institution} />
              
                <PrivateRoute path={MYIPERSONALDATA} session={isAuth} component={MyPersonalData} />
            </Router>
          
        </Suspense>
    )
}


