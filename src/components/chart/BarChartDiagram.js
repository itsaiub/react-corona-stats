import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Label,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Confirmed",
    number: "14"
  },
  {
    name: "Recovered",
    number: "3"
  },
  {
    name: "Deaths",
    number: "1"
  }
];

const BarChartDiagram = () => {
  return (
    <div>
      <ResponsiveContainer width={700} height="80%">
        <BarChart
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label="Height"
            dataKey="name"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            label={{
              x: 100,
              value: "pv of page",
              angle: -90,
              position: "insideLeft"
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="number" barSize={60} fill="#8884d8">
            <LabelList dataKey="number" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDiagram;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const getIntroOfPage = (label) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
};
