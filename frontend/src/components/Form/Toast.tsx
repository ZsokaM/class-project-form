import React, { FC } from "react";
import styled from "styled-components";

interface iToast {
  type: string;
  isActive?: boolean;
}
const Toast: FC<iToast> = ({ type, isActive, children }) => {
  return (
    <Container type={type} isVisible={isActive}>
      {children}
    </Container>
  );
};

const Container = styled.section<{ isVisible?: boolean; type: string }>`
  position: fixed;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  background-color: orange;
  top: ${({ isVisible }) => (isVisible ? 0 : "-100%")};
`;

export default Toast;
