import React from "react";
import styled from "styled-components";

interface Ibutton {
  btnType?: "primary" | "secondary" | "simple";
  type?: "button" | "submit";
  onClick?: ()=>void;
  disabled?: boolean;
}

const Button: React.FC<Ibutton> = ({
  btnType = "primary",
  type = "button",
  onClick,
  disabled,
  children,
}) => {
  const buttonTypeMap = {
    default: BaseButton,
    simple: SimpleBtn,
    primary: PrimaryBtn,
    secondary: SecondaryBtn,
  };

  const TransformButtonType = buttonTypeMap[btnType] || BaseButton;

  return (
    <TransformButtonType onClick={onClick} type={type} disabled={disabled}>
      {children}
    </TransformButtonType>
  );
};

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  color: white;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
`;

const SimpleBtn = styled(BaseButton)`
  background-color: transparent;
`;

const PrimaryBtn = styled(BaseButton)`
  background-color: ${({ theme }) => theme.linkColor};
  &:hover {
    background-color: ${({ theme }) => theme.onHover};
  }
`;
const SecondaryBtn = styled(BaseButton)`
  background-color: #a57f60;
  color: white;
  &:hover {
    background-color: #876b3a;
  }
`;

export default Button;
