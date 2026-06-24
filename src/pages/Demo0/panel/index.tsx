import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useMapStyleStore } from "../stores";
import useMoveTo from "@/hooks/useMoveTo";
import AutoFit from "@/components/autoFit";
import Button from "@/components/button";
import Chart1 from "./chart1";
import Chart2 from "./chart2";
import Chart3 from "./chart3";
import Chart4 from "./chart4";

import bg from "@/assets/card_bg.jpg";

const Radial = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(transparent 60%, black);
  transition: opacity 0.8s;
`;

const GridWrapper = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(141, 141, 141, 0.2);
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${bg});
    background-size: 100px;
    opacity: 0.2;
    border-radius: 0px;
    z-index: -1;
  }
`;

const Title = styled.div`
  font-family: "pmzd";
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 36px;
  letter-spacing: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #ffffff;
  padding-left: 20px;
`;

const TitleWrapper = styled(Card)`
  flex-direction: row;
  align-items: center;
`;

const CardTitle = styled.div`
  font-family: "pmzd";
  font-size: 28px;
  padding: 8px 16px;
`;

const BottomBox = styled.div`
  position: absolute;
  pointer-events: auto;
  bottom: 20px;
  left: 50%;
  display: flex;
  gap: 20px;
`;

const Github = styled.a.attrs({
  children: "GitHub",
})`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding-right: 16px;
  text-decoration: none;
`;

export default function Panel() {
  const radialRef = useRef<HTMLDivElement>(null!);
  const topBox = useMoveTo("toBottom", 0.6, 1);
  const leftBox = useMoveTo("toRight", 0.8, 1.5);
  const leftBox1 = useMoveTo("toRight", 0.8, 1.5);
  const rightBox = useMoveTo("toLeft", 0.8, 1.5);
  const rightBox1 = useMoveTo("toLeft", 0.8, 1.5);
  const bottomBox = useMoveTo("toTop", 0.8, 1.5, "translateX(-50%)");

  const togglePureMode = useMapStyleStore((s) => s.togglePureMode);
  const toggleMapStyle = useMapStyleStore((s) => s.toggleMapStyle);

  useEffect(() => {
    let initial = true;
    bottomBox.restart(initial);

    const unSub = useMapStyleStore.subscribe(
      (s) => s.pureMode,
      (v) => {
        if (!v) {
          topBox.restart(initial);
          leftBox.restart(initial);
          leftBox1.restart(initial);
          rightBox.restart(initial);
          rightBox1.restart(initial);
          radialRef.current.style.setProperty("opacity", "1");
        } else {
          topBox.reverse();
          leftBox.reverse();
          leftBox1.reverse();
          rightBox.reverse();
          rightBox1.reverse();
          radialRef.current.style.setProperty("opacity", "0");
        }
      },
      { fireImmediately: true }
    );

    initial = false;

    return () => {
      initial = true;
      unSub();
    };
  }, []);

  return (
    <AutoFit>
      <Radial ref={radialRef} />
      <TitleWrapper ref={topBox.ref}>
        <Title>Economic Operations Monitor</Title>
        <Github href="https://github.com/alqithami/sc-datav" target="_blank" />
      </TitleWrapper>
      <GridWrapper>
        <Card ref={leftBox.ref} style={{ gridArea: "1 / 1 / 3 / 2" }}>
          <CardTitle>Monthly Import and Export Value</CardTitle>
          <Chart1 />
        </Card>
        <Card ref={leftBox1.ref} style={{ gridArea: "3 / 1 / 5 / 2" }}>
          <CardTitle>Trade Value by Commodity Category</CardTitle>
          <Chart2 />
        </Card>
        <Card ref={rightBox.ref} style={{ gridArea: "1 / 4 / 3 / 5" }}>
          <CardTitle style={{ textAlign: "right" }}>Quarterly Tertiary-Industry Value Added</CardTitle>
          <Chart3 />
        </Card>
        <Card ref={rightBox1.ref} style={{ gridArea: "3 / 4 / 5 / 5" }}>
          <CardTitle style={{ textAlign: "right" }}>Import and Export Commodity Details</CardTitle>
          <Chart4 />
        </Card>

        <BottomBox ref={bottomBox.ref}>
          <Button onClick={toggleMapStyle}>Switch Style</Button>
          <Button onClick={togglePureMode}>Clean Mode</Button>
        </BottomBox>
      </GridWrapper>
    </AutoFit>
  );
}
