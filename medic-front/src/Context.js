import React, { useState } from 'react';

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [userType, setUserType] = useState({
                    _id:'',
                    email: '',
                    firstName: '',
                    lastName: '',
                    profile: '',
                    matricula: '',
                    phoneNumber: '',
                    identifier: ''
  })
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  });
  const [languaje, setLanguaje] = useState('ES')

  const value = {
    languaje,
    setLanguaje,
    isAuth,
    setIsAuth,
    userType,
    setUserType,
    activeAuth: ({auth})=> {
      setIsAuth(true);
      window.sessionStorage.setItem('token', auth)
    },
    activeId: ({_id, email, firstName, lastName, profile, matricula, phoneNumber, identifier})=> {
      window.sessionStorage.setItem('idUser', _id)
      setUserType({
        ...userType,
                    _id:_id,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    profile: profile,
                    matricula: matricula,
                    phoneNumber: phoneNumber,
                    identifier: identifier
      })
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
  Context,
  Provider,
  Consumer: Context.Consumer,
};