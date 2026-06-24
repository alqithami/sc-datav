import SeamVirtualScroll from "@/components/seamVirtualScroll";

export default function Charts4() {
  return (
    <SeamVirtualScroll
      rowHeight={50}
      column={[
        { title: "", dataIndex: "value1" },
        { title: "Type", dataIndex: "value2" },
        { title: "Quantity (10k)", dataIndex: "value3" },
        { title: "Trade Value (¥10k)", dataIndex: "value4" },
      ]}
      data={Array.from({ length: 100 }, (_, k) => ({
        value1: `${k + 1}`,
        value2: `Type ${k + 1}`,
        value3: (Math.random() * 100).toFixed(2),
        value4: (Math.random() * 1000).toFixed(2),
      }))}
    />
  );
}
