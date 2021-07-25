import styled from "styled-components";

const Footer = () => {
  return <FooterStyle>I am the footer</FooterStyle>;
};

const FooterStyle = styled.footer`
  display: flex;
  width: 100%;
  padding: 0.25rem;
  justify-content: center;
  color: var(--strawberry);
  background-color: ${({ theme }) => theme.background};
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

export default Footer;
