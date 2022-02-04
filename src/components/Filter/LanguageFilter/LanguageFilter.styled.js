import styled, { css } from "styled-components";

export const MenuContent = styled.nav`
display: none;
  
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

