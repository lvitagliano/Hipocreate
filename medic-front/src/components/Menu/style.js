import styled, {css} from 'styled-components'

export const DivStyle = styled.div`
    width: 260px;
    height: 150vh;
    z-index:990;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-left: -260px;
    display:flex;
    position: fixed;
     background: #444444;
    transition: 0.5s;
    ${props => props.move && css`
    {
      transform:translateX(260px)
    }
  `}
`

export const Button = styled.button`
  display: flex;
  text-decoration: none;
  margin: 10px 10px 10px 30px;
  font-size:25px;
  font-weight:500;
  color:#fff;
  justify-content: center;
  align-items: flex-start;
`

export const Hr = styled.hr` 
  height: 2px;
  width: 100%;
  background-color: #fff;

`

export const H2 = styled.h2` 
  margin: 5px 5px 30px 12px;
  color:#fff;

`

