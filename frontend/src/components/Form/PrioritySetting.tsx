import React, { FC } from "react";
import styled from "styled-components";

interface iPriorityProps {
  priority: number[];
  onHandleFormElement: React.ChangeEventHandler<HTMLInputElement>;
}

const PrioritySetting: FC<iPriorityProps> = ({
  priority,
  onHandleFormElement,
}) => {
  return (
    <>
      <LabelText>Priority</LabelText>

      <RadioGroup>
        {priority.length > 0 &&
          priority.map((radioItem) => (
            <RadioItem key={radioItem}>
              <RadioInput
                type="radio"
                name="priority"
                value={radioItem}
                id={`radio-item-${radioItem}`}
                onChange={onHandleFormElement}
              />

              <FormCheckRadio htmlFor={`radio-item-${radioItem}`}>
                {radioItem === 1 ? `high` : radioItem === 2 ? `medium` : `low`}
              </FormCheckRadio>
            </RadioItem>
          ))}
      </RadioGroup>
    </>
  );
};

const RadioGroup = styled.section`
  padding: 5px;
  display: flex;
  justify-content: center;
`;

const RadioItem = styled.div`
  padding: 10px 10px;
  text-align: center;
  display: block;
  font-size: 1rem;
  border-radius: 5px;
  font-weight: 500;
  margin: 0.5rem;
`;

const RadioInput = styled.input`
  display: none;

  &:checked ~ label {
    background-color: ${({ theme }) => theme.onHover};
    color: white;
  }

  $:disabled ~ label,
  $:checked:disabled ~ label {
    background-color: #bdbbbb;
    color: white;
    cursor: not-allowed;
  }
`;
const FormCheckRadio = styled.label`
  position: relative;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  cursor: pointer;
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
export default PrioritySetting;
