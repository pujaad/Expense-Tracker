
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function BarChartComponent({ expenses }) {
  return (
    <div>
      <h2>Top Expenses</h2>

      <div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={expenses} layout="vertical">
            <XAxis type="number" axisLine={false} display="none" />
            <YAxis
              type="category"
              width={100}
              dataKey="title"
              axisLine={false}
            />
            <Bar dataKey="price" fill="#8884d8" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
