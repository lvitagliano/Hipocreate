import styled from 'styled-components'

export const Cuerpo = styled.div`
display: flex;
align-items: center;
justify-content:flex-start;
width:${props => props.value ? props.value : '100%'};
`

export const Segmentos = styled.div`
margin:5px;
width:${props => props.value ? props.value : '100%'};
`

export const Form = styled.form`
  padding: 16px 0;
  margin:15px;
  text-align: center;

`

export const InputText = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 9px 12px;
  font-size:16px;
  display: block;
  width: 100%;
`


export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`