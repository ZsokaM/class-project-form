import React, { FC } from "react";
import styled from "styled-components";

interface IFieldsetProps {
  title?: string;
  children?: React.ReactNode;
}
const Fieldset: FC<IFieldsetProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.fieldset`
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 1px dotted ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-bottom: 0.5rem;
`;

export default Fieldset;
