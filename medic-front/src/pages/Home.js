import React, { useEffect, lazy } from 'react'
import { Fragmento } from './style'
import { Title } from '../components/Title'

const Divs = '45px'

export const Home = () => {

    function getMoviesFromApiAsync() {
        return fetch('https://qa.bonvivir.com/wp-json/menus/v1/menus/menu')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
          })
        .catch((error) => {
          console.error('error', error);
        });
     }

     useEffect(() => {
        getMoviesFromApiAsync()
      }, [])

    return (
        <Fragmento>
      
        </Fragmento>
    )
}
