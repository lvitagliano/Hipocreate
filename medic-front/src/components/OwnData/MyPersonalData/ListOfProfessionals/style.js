import styled from 'styled-components'
import { fadeIn } from '../../../styles/animation'

export const Cuerpo =styled.div`
text-align: center;
flex-grow: 'grow';
 margin: 0px auto;
`

export const Div =styled.article`
${fadeIn({ time: '.5s'})}
 border-radius: 8px;
 box-shadow: 0 0 8px rgba(0, 0, 0, .3);
 display: inline-block;
 margin: 20px;
 padding:10px;
 overflow: hidden;
 position: relative;
 width: 280px;
 flex-grow: 'grow';
`
export const Grid = styled.div`
 width: 95%;
 margin-top: 50px;
 display: flex;
 justify-content: flex-end;
`

export const Title = styled.h3`
  font-size:20px;
  text-decoration-style: solid;
  font-weight:700;
  display: flex;
 align-items: center;  
 justify-content: center;
`

export const Ul = styled.ul`
padding:8px;
text-decoration:'none';
`

export const Li = styled.li`
margin:5px;
font-size:99%;
`
export const Footer = styled.div`
   display: flex;
 align-items: center;  
 justify-content: space-between;
`;
