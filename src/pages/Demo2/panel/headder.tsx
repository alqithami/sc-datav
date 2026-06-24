import type { ComponentProps } from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: linear-gradient(
    to bottom,
    rgba(12, 26, 66, 0.92),
    rgba(12, 26, 66, 0.12)
  );
  border-bottom: 1px solid rgba(120, 158, 255, 0.5);
`;

const Title = styled.div`
  color: #e8efff;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 0 14px rgba(120, 158, 255, 0.8);
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  margin-top: 6px;
  color: rgba(189, 207, 255, 0.75);
  font-size: 12px;
  letter-spacing: 6px;
  text-align: center;
`;

const Github = styled.a.attrs({ children: "GitHub" })`
  position: absolute;
  right: 32px;
  top: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  pointer-events: auto;
  text-decoration: none;
`;

export default function Headder(props: ComponentProps<typeof TitleWrapper>) {
  return (
    <TitleWrapper {...props}>
      <div>
        <Title>Sichuan Power Grid Operations</Title>
        <Subtitle>REAL-TIME ENERGY OPERATIONS DASHBOARD</Subtitle>
      </div>
      <Github href="https://github.com/alqithami/sc-datav" target="_blank" />
    </TitleWrapper>
  );
}
