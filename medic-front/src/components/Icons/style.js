import styled from 'styled-components'

export const Div =styled.div`
 border-radius: 70%;
 box-shadow: 0 0 8px rgba(0, 0, 0, .3);
 display: flex;
 align-items: center;  
 justify-content: center;
 width:${props => props.size};
 height:${props => props.size};
 background-color:${props => props.color}
`
