import styled from "styled-components";

import React, { FC } from "react";

interface iDropDown {
  users: iUser[];
  onHandleFormElement: React.ChangeEventHandler<HTMLSelectElement>;
}

interface iUser {
  id: string;
  value: string;
  name: string;
}
const Dropdown: FC<iDropDown> = ({ users, onHandleFormElement }) => {
  return (
    <>
      <LabelText>Reporter</LabelText>
      <Select name="reporter" onChange={onHandleFormElement}>
        <option value="">--Reporter--</option>
        {users.length > 0 &&
          users.map((user: iUser) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
      </Select>
    </>
  );
};

const LabelText = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  padding: 0.8rem 0;
  font-weight: 300;
  display: block;
  text-align: center;
`;
const Select = styled.select`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 1rem;
`;

export default Dropdown;
