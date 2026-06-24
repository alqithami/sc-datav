import Chart from "@/components/chart";
import { BarChart, PictorialBarChart } from "echarts/charts";
import styled from "styled-components";
import NumberAnimation from "@/components/numberAnimation";
import { PieChart, type PieSeriesOption } from "echarts/charts";
import type { ComposeOption } from "echarts/core";
import {
  GridComponent,
  TooltipComponent,
  type GridComponentOption,
  type LegendComponentOption,
  type TooltipComponentOption,
} from "echarts/components";
import { LegacyGridContainLabel } from "echarts/features";
import type { BarSeriesOption, PictorialBarSeriesOption } from "echarts";

type BarOption = ComposeOption<
  | PictorialBarSeriesOption
  | BarSeriesOption
  | LegendComponentOption
  | GridComponentOption
>;

type PieOption = ComposeOption<PieSeriesOption | TooltipComponentOption>;

const color = ["#bdcfff", "#b693e2", "#91cfd4", "#3061DB"];

const trafficWay = [
  { name: "Q1", value: 20 },
  { name: "Q2", value: 10 },
  { name: "Q3", value: 30 },
  { name: "Q4", value: 40 },
];

const data = trafficWay.reduce<PieSeriesOption["data"]>((pre, cur, i) => {
  pre?.push(
    {
      value: cur.value,
      name: cur.name,
      itemStyle: {
        borderRadius: 10,
        shadowBlur: 10,
        color: color[i],
        shadowColor: color[i],
      },
    },
    {
      value: 2,
      name: "",
      label: {
        show: false,
      },
      itemStyle: {
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0,
      },
    }
  );
  return pre;
}, []);

const list = [
  { name: "Cumulative Growth", value: 36 },
  { name: "YoY Growth", value: 25 },
];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 8;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: 10% 35% repeat(1, minmax(0, 1fr));
`;

const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatisticsTitle = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
`;

const StatisticsNumber = styled(NumberAnimation)`
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 28px;
  font-weight: 600;
  color: #3061db;

  &::after {
    content: "100M kWh";
    display: inline-block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: normal;
  }
`;

export default function Chart1() {
  return (
    <Wrapper>
      <Statistics>
        <StatisticsTitle>Total Generation</StatisticsTitle>
        <StatisticsNumber
          value={16608}
          options={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
        />
      </Statistics>
      <Chart<BarOption>
        use={[
          PictorialBarChart,
          BarChart,
          GridComponent,
          LegacyGridContainLabel,
        ]}
        option={{
          grid: { containLabel: true, top: 16, left: 0, bottom: 0 },
          xAxis: {
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
          yAxis: {
            gridIndex: 0,
            inverse: true,
            position: "right",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 10,
              fontSize: 14,
              color: "#fff",
            },
            data: yName,
          },
          series: [
            {
              type: "bar",
              barWidth,
              legendHoverLink: false,
              silent: true,
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#000000" },
                    { offset: 1, color: "#3061DB" },
                  ],
                },
              },
              data: list,
              z: 1,
              animationEasing: "elasticOut",
            },
            {
              type: "pictorialBar",
              animationDuration: 0,
              symbolRepeat: "fixed",
              symbolMargin: "20%",
              symbol: "rect",
              symbolSize: barWidth,
              itemStyle: {
                color: "#83848d",
              },
              label: {
                show: true,
                position: "right",
                distance: 90,
                color: "#3061DB",
                fontSize: 14,
                formatter: `{c}%`,
              },
              data: xData,
              z: 0,
              animationEasing: "elasticOut",
            },
            {
              type: "pictorialBar",
              itemStyle: {
                color: "#000",
              },
              symbolRepeat: "fixed",
              symbolMargin: barWidth / 2,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [2, barWidth],
              symbolPosition: "start",
              symbolOffset: [0, 0],
              data: list,
              z: 2,
              animationEasing: "elasticOut",
            },
          ],
        }}
      />
      <Chart<PieOption>
        use={[PieChart, TooltipComponent]}
        option={{
          color: color[0],
          tooltip: {
            show: false,
          },
          series: [
            {
              name: "Generation Share",
              type: "pie",
              center: ["50%", "50%"],
              radius: [35, 45],
              label: {
                alignTo: "edge",
                formatter: "{name|{b}}\n{val|{c} %}",
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                color: "rgba(255,255,255,0.8)",
                rich: {
                  val: {
                    fontSize: 10,
                    color: "#999",
                  },
                },
              },
              labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80,
              },
              data: data,
            },
          ],
        }}
      />
    </Wrapper>
  );
}
