import { PieChart, type PieSeriesOption } from "echarts/charts";
import Chart from "@/components/chart";
import type { ComposeOption } from "echarts/core";
import {
  LegendComponent,
  TooltipComponent,
  type LegendComponentOption,
  type TooltipComponentOption,
} from "echarts/components";

type PieOption = ComposeOption<
  PieSeriesOption | TooltipComponentOption | LegendComponentOption
>;

const color = ["#fbdf88", "#ffa800", "#ff5b00", "#ff3000"];

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
        shadowBlur: 20,
        color: color[i],
        shadowColor: color[i],
      },
    },
    {
      value: 2,
      name: "",
      itemStyle: {
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0,
      },
    }
  );
  return pre;
}, []);

export default function Chart5() {
  return (
    <Chart<PieOption>
      use={[PieChart, TooltipComponent, LegendComponent]}
      option={{
        color: color[0],
        tooltip: {
          show: false,
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          data: ["Q1", "Q2", "Q3", "Q4"],
          top: "middle",
          right: "10%",
          textStyle: {
            color: "#000000",
          },
          itemGap: 20,
        },
        series: {
          name: "",
          type: "pie",
          center: ["30%", "50%"],
          radius: [70, 80],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      }}
    />
  );
}
