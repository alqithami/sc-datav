import SeamVirtualScroll from "@/components/seamVirtualScroll";

const data = Array.from({ length: 50 }, (_, k) => ({
  value1: ++k,
  value2: `Fault ${k}`,
  value3: Math.round(Math.random() * 1000),
  value4: Math.round(Math.random() * 100),
  value5: (
    <span
      style={{
        color: k % 2 === 0 ? "#ffa800" : "#ea580c",
      }}>
      {k % 2 === 0 ? "In Progress" : "Resolved"}
    </span>
  ),
}));

export default function Chart6() {
  return (
    <SeamVirtualScroll
      rowHeight={50}
      styles={{
        header: { color: "rgba(255, 255, 255, 0.6)" },
        body: { color: "#3061DB" },
      }}
      column={[
        { title: "No.", dataIndex: "value1", noScroll: true },
        {
          title: "Fault Event",
          dataIndex: "value2",
          align: "center",
          noScroll: true,
        },
        {
          title: "Anomaly Count",
          dataIndex: "value3",
          align: "right",
          noScroll: true,
        },
        {
          title: "Alarm Count",
          dataIndex: "value4",
          align: "right",
          noScroll: true,
        },
        {
          title: "Status",
          dataIndex: "value5",
          align: "right",
          noScroll: true,
        },
      ]}
      data={data}
    />
  );
}
