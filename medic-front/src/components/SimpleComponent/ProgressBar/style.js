import styled from 'styled-components'

export const Div =styled.div`
  display:flex;
  align-items: center;  
  justify-content: center;
  width:100%;
  margin-bottom:-50px;
  margin-top:-8px;
padding: 6px;
z-index:200;
`

export const ProgressBar =styled.div`
display:center;
  background: #e6e6e6;
  width:90%;
  border-radius: 20px;
  margin: 5px;
  z-index:200;
`

export const ProgressValue =styled.div`
  background: ${props => props.color};
  width:${props => props.value};
  height:20px;
  border-radius: 20px;
  text-align: center;
  color:#fff;
  font-weight:600;
`



