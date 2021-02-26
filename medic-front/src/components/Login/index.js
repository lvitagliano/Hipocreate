import React, { useContext, useState, Fragment } from 'react'
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom"
import { Context } from "../../Context"
import { Div, Title, Cuerpo, Image, Grid, Grid2, Boton, Span } from "./style";
import { IconButton, InputLabel, Input, InputAdornment, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import { AUTH } from '../../container/Mutation';
import path from 'path'
import { Logo } from "../Logo";
import { EmojiSunglasses } from 'styled-icons/bootstrap';

export const LoginComponent = () => {
   const history = useHistory()
   const { activeAuth } = useContext(Context)
   const [auth, { loading, error }] = useMutation(AUTH);
   const [errors, setErrors] = useState({
      label: 'Usuario o contraseña incorrecto',
      shoError: true
   })
   const [values, setValues] = useState({
      username: '',
      password: '',
      showPassword: false,
   });

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleSubmit = (event) => {
      event.preventDefault()
      onSubmits(values)

   }

   const onSubmits = (input) => {
      const variables = { identifier: input.username, password: input.password }
      auth({ variables }).then(({ data }) => {
         window.sessionStorage.removeItem('token')
         activeAuth(data)
         history.push("/");
      }).catch(() => {
         setErrors({
            shoError: false,

         })
      })
   }

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         onSubmits(values)
      }
    }

   return <Cuerpo>

      <form onKeyDown={() => handleKeyDown} disabled={loading} onSubmit={handleSubmit}>
         <Div >
         <Logo />
            <Title>Ingresar</Title>
            <Grid>
               <FormControl fullWidth >
                  <InputLabel>Usuario</InputLabel>
                  <Input
                  required
                     id="username"
                     name="username"
                     value={values.username}
                     onChange={handleChange('username')}
                     onKeyPress={handleKeyDown}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              edge="end"
                           >
                              <AccountCircle />
                           </IconButton>
                        </InputAdornment>
                     }
                  />
               </FormControl>

            </Grid>
            <Grid>
               <FormControl fullWidth>
                  <InputLabel>Password</InputLabel>
                  <Input
                  required
                     id="password"
                     name="password"
                     placeholder="Password"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.password}
                     onChange={handleChange('password')}
                     onKeyPress={handleKeyDown}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                           >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                           </IconButton>
                        </InputAdornment>
                     }
                  />
               </FormControl>

            </Grid>

            <Span hidden={errors.shoError} style={{ color: 'red' }}>{errors.label}</Span>

            <Grid2>
               <Boton type="submit" onKeyDown={handleKeyDown}>Login</Boton>
            </Grid2>
         </Div>
      </form>

   </Cuerpo>

}
