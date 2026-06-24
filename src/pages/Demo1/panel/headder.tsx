import type { ComponentProps } from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: linear-gradient(
    to bottom,
    rgba(255, 245, 232, 0.98),
    rgba(255, 245, 232, 0.78)
  );
  border-bottom: 1px solid rgba(234, 88, 12, 0.35);
`;

const Title = styled.div`
  font-size: 36px;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 8px 10px rgba(255, 145, 0, 0.8);
  font-weight: 700;
  background: linear-gradient(to bottom, #ea580c, #ff9100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  &::after {
    content: "SICHUAN SMART CITY DATA BRAIN";
    display: block;
    font-size: 12px;
    letter-spacing: 8px;
    text-align: center;
    color: rgba(255, 145, 0, 0.6);
    margin-top: -5px;
    -webkit-text-fill-color: rgba(255, 145, 0, 0.6);
  }
`;

const Github = styled.a.attrs({ children: "GitHub" })`
  position: absolute;
  right: 32px;
  top: 22px;
  color: #5a4a42;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  pointer-events: auto;
`;

export default function Headder(props: ComponentProps<typeof TitleWrapper>) {
  return (
    <TitleWrapper {...props}>
      <Title>Sichuan Smart City Data Brain</Title>
      <Github href="https://github.com/alqithami/sc-datav" target="_blank" />
    </TitleWrapper>
  );
}
