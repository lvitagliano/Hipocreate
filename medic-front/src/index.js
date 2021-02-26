import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from "react-redux";
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
import {ApolloClient, InMemoryCache, ApolloProvider  } from'@apollo/client'
import Context from "./Context"

import { App } from './App'

const client = new ApolloClient({
    uri: 'http://localhost:4006/api',
    cache: new InMemoryCache(), 
    //es la funcion que se va ejecutar justo antes de cualquier peticion
    request: operation => {
        const token = window.sessionStorage.getItem('token')
        const authorization = token ? `Bearer ${token}` : ''
        operation.setContext({
            headers: {
                authorization
            }
        })
    },
    onError: error => {
        const { networkError } = error
        if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token')
            window.location.href = '/'
        }
    }
  })
//   const store = generateStore()
  const store = {}
ReactDOM.render(
<Context.Provider>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
</Context.Provider>

, document.getElementById('app'))




