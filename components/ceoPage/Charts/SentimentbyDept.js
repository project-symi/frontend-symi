import React from 'react';



import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

//context API
import CeoContext from '../../../contextApi/CeoContext';

export default class SentimentbyDept extends React.Component {
  static contextType = CeoContext;

  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8'],
    };
  }

  render() {
    return (
      <div className="data-big">
        <BarChart
          width={750}
          height={300}
          data={this.context.departmentFeedbacks}
          margin={{
            top: 20,
            right: 20,
            left: -20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="😞" stackId="a" fill="#8884d8" />
          <Bar dataKey="😐" stackId="a" fill="#58AFC2" />
          <Bar dataKey="😊" stackId="a" fill="#3ED7BD" />
        </BarChart>
      </div>
    );
  }
}
