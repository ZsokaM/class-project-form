import React, { FC } from "react";
import styled, { css } from "styled-components";

interface iToast {
  type: string;
  isActive?: boolean;
  isVisible?: boolean;
}
const Toast: FC<iToast> = ({ type, isActive, children }) => {
  return (
    <Container type={type} isVisible={isActive}>
      {children}
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  background-color: orange;
  ${(p: iToast) =>
    p.isVisible &&
    css`
      top: 0;
    `};
  ${(p: iToast) =>
    !p.isVisible &&
    css`
      top: -100%;
    `};
`;

export default Toast;
