import React, { FC } from "react";
import styled from "styled-components";

interface IformInputProps {
  label?: string;
  type?: string;
  required?: string;
  name?: string;
  placeholder?: string;
  onHandleFormElement: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value?: string;
}

const FormInput: FC<IformInputProps> = ({
  label,
  type = "text",
  required,
  name,
  placeholder,
  onHandleFormElement,
  disabled,
  value,
}) => {
  return (
    <Container>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onHandleFormElement}
        disabled={disabled}
        value={value}
      />
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.25rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.linkColor};
  padding: 10px;
  font-size: 1rem;
  text-align: center;

  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
`;

const LabelText = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  padding: 0.25rem 0;
  font-weight: 300;
  display: block;
  text-align: center;
`;

export default FormInput;
