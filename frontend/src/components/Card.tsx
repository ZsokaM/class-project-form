import React, { FC } from "react";
import styled, { css } from "styled-components";

interface iCard {
  priority: number;
  title: string;
  date: string;
  description: string;
  reporter: string;
}

interface iStyleProp {
  priority: number;
}
const Card: FC<iCard> = ({
  priority = 1,
  title,
  date,
  description,
  reporter,
}) => {
  return (
    <CardContainer>
      <Top>
        <Prio priority={priority}></Prio>
        <span>{date}</span>
      </Top>
      <h2>{title}</h2>
      <Reporter>reporter: {reporter} </Reporter>
      <Description>description: {description}</Description>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  border-radius: 5px;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.linkColor};
  border: 1px solid black;
  width: 80%;
  box-shadow: 0px 2px 3px 1px #5149496e;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 2rem;

  &:hover {
    transform: scale(1.01);
  }
`;

const Prio = styled.span`
  position: relative;
  padding-left: 25px;
  &::before {
    content: "";
    border: 1px solid black;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    ${(p: iStyleProp) =>
      p.priority === 0 &&
      css`
        background-color: green;
      `};
    ${(p: iStyleProp) =>
      p.priority === 2 &&
      css`
        background-color: yellow;
      `};
    ${(p: iStyleProp) =>
      p.priority === 1 &&
      css`
        background-color: red;
      `};

    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    box-shadow: 0px 2px 3px 1px #5149496e;
  }
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;

const Reporter = styled.span`
  display: block;
`;

const Description = styled.p`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
`;

export default Card;
