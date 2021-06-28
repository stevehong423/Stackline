//Import React and ReCharts
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//Define Interface For Graph
interface IGraph {
  sales: any[]
};

const Graph: React.FC<IGraph> = ({ sales }) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={200}
          height={300}
          data={sales}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
};

export default Graph;
