import styled, {css} from 'styled-components'
import { fadeIn } from "../../styles/animation";

export const Title = styled.h1`
/* color:#2634d4; */
text-transform: uppercase;
`

export const Nav = styled.nav`
  z-index:900;
  width: 100%;
  position: absolute;

`
export const FirstLine = styled.div`
  background: #f1f1f1;
  border-bottom: 2px solid;
  border-color: #eaeaea;
  height: 60px;
  width: 100%;
  display:flex;
  align-items: center;  
  justify-content: space-between;
  position: absolute;
  z-index: 1000;
  margin-bottom:100px;
`
export const Button = styled.button`
  align-items: center;  
  margin-right:15px;
  color: #888;
  display: inline-flex;
  height: 50px;
  justify-content: center;
  text-decoration: none;

  &[aria-current] {
    color:#000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 10;
      font-size: 55px;
      line-height: 20px;
    }

  }
`