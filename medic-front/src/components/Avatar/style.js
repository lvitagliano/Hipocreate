import styled, {css} from 'styled-components'
import { Link as LinkRouter } from "@reach/router"

export const Link = styled.div`
  display: flex;
  text-decoration: none;
  margin: 15px;
  justify-content: center;
  align-items: flex-start;
  
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: ${props => props.size};
  width: ${props => props.size};
  margin-top: ${props => props.margin};
  z-index: 999;
`