import React from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

//context API
import CeoContext from '../../../contextApi/CeoContext';

export default class SentimentbyNews extends React.Component {
  static contextType = CeoContext;

  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8']
    };
  }

  render() {
    return (
      <div className="data-big">
        <AreaChart
          width={750}
          height={300}
          data={this.context.categoryFeedbacks}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="😞"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="😐"
            stackId="1"
            stroke="#58AFC2"
            fill="#58AFC2"
          />
          <Area
            type="monotone"
            dataKey="😊"
            stackId="1"
            stroke="#3ED7BD"
            fill="#3ED7BD"
          />
        </AreaChart>
        
      </div>
    );
  }
}
