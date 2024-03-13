import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "./BarChartComponent.module.scss";

function BarChartComponent({ groupMembers }) {
  console.log(groupMembers);

  const data = [
    {
      name: groupMembers[0].login,
      iq: groupMembers[0].iq,
    },
    {
      name: groupMembers[1].login,
      iq: groupMembers[1].iq,
    },
  ];

  return (
    <ResponsiveContainer className={styles.responsiveContainer}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickCount={3} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="iq"
          fill="#8884d8"
          barSize={80}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
