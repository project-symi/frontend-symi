import React from 'react';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from 'recharts';

// sentiment by category
const dataset = {
  good: [
    { name: 'Work/Life Balance', value: 50 },
    { name: 'News', value: 30 },
    { name: 'Benefits', value: 30 },
    { name: 'Holidays', value: 20 },
    { name: 'Job Satisfaction', value: 20 },
    { name: 'Company Policy', value: 20 },
    { name: 'Employees', value: 20 },
    { name: 'Other', value: 20 }
  ],
  meh: [
    { name: 'Work/Life Balance', value: 10 },
    { name: 'News', value: 30 },
    { name: 'Benefits', value: 30 },
    { name: 'Holidays', value: 20 },
    { name: 'Job Satisfaction', value: 20 },
    { name: 'Company Policy', value: 20 },
    { name: 'Employees', value: 20 },
    { name: 'Other', value: 20 }
  ],
  sad: [
    { name: 'Work/Life Balance', value: 20 },
    { name: 'News', value: 30 },
    { name: 'Benefits', value: 30 },
    { name: 'Holidays', value: 20 },
    { name: 'Job Satisfaction', value: 20 },
    { name: 'Company Policy', value: 20 },
    { name: 'Employees', value: 20 },
    { name: 'Other', value: 20 }
  ]
};


export default class SentimentbyCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8'],
      data: dataset
    };
  }

  render() {
    return (
      <div className="data">
        <PieChart width={270} height={250}>
          <Pie
            data={this.state.data.good}
            dataKey="value"
            cx={140}
            cy={110}
            outerRadius={25}
            fill="#3ED7BD"
          />
          <Pie
            data={this.state.data.meh}
            dataKey="value"
            cx={140}
            cy={110}
            innerRadius={30}
            outerRadius={55}
            fill="#58AFC2"
          />
          <Pie
            data={this.state.data.sad}
            dataKey="value"
            cx={140}
            cy={110}
            innerRadius={60}
            outerRadius={85}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}
