import styled, { css } from "styled-components";

export const MenuSideBar = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 293;
  display: block;
  // width: 100%;
  min-width: 100%;
  margin-top: 0px;
  padding: 100px 10px;
  align-items: stretch;
  background-color: #fff;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); 
  height: 3800px;


  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
width: 360px;
`
