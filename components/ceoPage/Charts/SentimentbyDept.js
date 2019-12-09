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

const dataset = [
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

export default class SentimentbyDept extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8'],
      data: dataset
    };
  }

  render() {
    return (
      <div className="data-big">
        <BarChart
          width={750}
          height={300}
          data={this.state.data}
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
          <Bar dataKey="😐" stackId="a" fill="#58AFC2" />
          <Bar dataKey="😊" stackId="a" fill="#3ED7BD" />
        </BarChart>
      </div>
    );
  }
}
