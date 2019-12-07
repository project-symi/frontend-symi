import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { ResponsivePie } from '@nivo/pie';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const barchart = [
  {
    name: 'Marketing',
    '😊': 400,
    '😐': 240,
    '😞': 100,
    amt: 240
  },
  {
    name: 'HR',
    '😊': 300,
    '😐': 139,
    '😞': 100,
    amt: 221
  },
  {
    name: 'Eng',
    '😊': 200,
    '😐': 980,
    '😞': 100,
    amt: 229
  },
  {
    name: 'Operations',
    '😊': 278,
    '😐': 390,
    '😞': 100,
    amt: 200
  },
  {
    name: 'Accounting',
    '😊': 189,
    '😐': 480,
    '😞': 100,
    amt: 218
  },
  {
    name: 'Sales',
    '😊': 239,
    '😐': 380,
    '😞': 100,
    amt: 250
  },
  {
    name: 'Management',
    '😊': 239,
    '😐': 380,
    '😞': 100,
    amt: 250
  }
];

const meow = [
  {
    id: 'hack',
    label: 'hack',
    value: 21,
    color: 'hsl(121, 70%, 50%)'
  },
  {
    id: 'sass',
    label: 'sass',
    value: 191,
    color: 'hsl(234, 70%, 50%)'
  },
  {
    id: 'rust',
    label: 'rust',
    value: 429,
    color: 'hsl(72, 70%, 50%)'
  },
  {
    id: 'go',
    label: 'go',
    value: 206,
    color: 'hsl(259, 70%, 50%)'
  },
  {
    id: 'stylus',
    label: 'stylus',
    value: 195,
    color: 'hsl(262, 70%, 50%)'
  }
];

const categories = [
  { name: 'Work/Life Balance', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 }
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      topEmployees: [],
      feedback: [
        {
          feeling: null,
          about: { type: null, input: null },
          note: null
        }
      ]
    };
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
      <div>
        <p className="title">CEO Dashboard</p>
        <div id="data-container">
          <div>
            <p className="data-title">TOP CATEGORIES</p>
            <div className="data">
              <PieChart width={260} height={210}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={categories}
                  cx={130}
                  cy={100}
                  outerRadius={80}
                  fill="#8884d8"
                  label="meow"
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div>
            <p className="data-title">SENTIMENT BY DEPARTMENT</p>
            <div className="data">
              <PieChart width={250} height={250}>
                <Pie
                  data={categories}
                  dataKey="value"
                  cx={150}
                  cy={120}
                  outerRadius={50}
                  fill="#8884d8"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx={150}
                  cy={120}
                  innerRadius={70}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </div>
          </div>
        </div>
        <div id="data-container-big">
          <div>
            <p className="data-title">SENTIMENT BY DEPARTMENT</p>
            <div className="data-big">
              <BarChart
                width={650}
                height={300}
                data={barchart}
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
                <Legend />
                <Bar dataKey="😞" stackId="a" fill="#8884d8" />
                <Bar dataKey="😐" stackId="a" fill="#3ED7BD" />
                <Bar dataKey="😊" stackId="a" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
