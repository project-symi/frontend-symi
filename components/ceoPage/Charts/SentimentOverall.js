import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from 'recharts';

const dataset = [
  { name: '😊', value: 40 },
  { name: '😐', value: 30 },
  { name: '😞', value: 34 }
];

export default class SentimentOverall extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8'],
      data: dataset
    };
  }

  // overall sentiment percentage label
  renderPercentageLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    return (
      <div className="data">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={this.state.data}
              fill="#8884d8"
              labelLine={false}
              label={this.renderPercentageLabel}
            >
              {this.state.data.map((entry, index) => (
                <Cell
                  fill={this.state.colors[index % this.state.colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
