import type { ComponentProps } from "react";
import styled from "styled-components";
import { useConfigStore } from "../stores";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 720px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
  z-index: 10;
  padding-bottom: 20px;
`;

const Button = styled.button<{ $active?: boolean }>`
  pointer-events: auto;
  position: relative;
  min-width: 110px;
  height: 46px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(234, 88, 12, 0.2);
  color: #d35400;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(234, 88, 12, 0.1) 0%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.04);
    border-color: #ff6715;
    box-shadow: 0 0 15px rgba(255, 103, 21, 0.4);
    color: #ff6715;
  }

  &:hover::before {
    opacity: 1;
  }

  ${(props) =>
    props.$active &&
    `
      background: linear-gradient(135deg, #ff6715 0%, #ff8c00 100%);
      color: white !important;
      border: none;
      box-shadow: 0 4px 15px rgba(255, 103, 21, 0.5);
      margin-bottom: 5px;
    `}
`;

const Bg = () => (
  <svg
    viewBox="0 0 1920 100"
    preserveAspectRatio="none"
    width="100%"
    height="100%">
    <defs>
      <linearGradient id="grad-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff5e8" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#fff5e8" stopOpacity="1" />
      </linearGradient>
    </defs>

    <path
      d="M0,100 H1920 V100 Q1600,100 1450,100 Q1300,80 1200,60 Q960,10 720,60 Q620,80 470,100 Q320,100 0,100 Z"
      fill="url(#grad-bottom)"
      stroke="none"
    />

    <path
      d="M0,100 Q320,100 470,100 Q620,80 720,60 Q960,10 1200,60 Q1300,80 1450,100 Q1600,100 1920,100"
      fill="none"
      stroke="#ff6715"
      strokeWidth="1"
      strokeOpacity="0.4"
    />

    <path
      d="M720,60 Q960,10 1200,60"
      fill="none"
      stroke="#ff6715"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Footer(props: ComponentProps<typeof Wrapper>) {
  const { cloud, rotation, mode, heat, bar, toggle } = useConfigStore();

  return (
    <Wrapper {...props}>
      <Bg />
      <Buttons>
        <Button $active={cloud} onClick={() => toggle("cloud")}>
          Cloud Layer
        </Button>
        <Button $active={rotation} onClick={() => toggle("rotation")}>
          Auto Rotate
        </Button>
        <Button $active={mode} onClick={() => toggle("mode")}>
          Panel Mode
        </Button>
        <Button $active={heat} onClick={() => toggle("heat")}>
          Heatmap
        </Button>
        <Button $active={bar} onClick={() => toggle("bar")}>
          Bar Layer
        </Button>
      </Buttons>
    </Wrapper>
  );
}
