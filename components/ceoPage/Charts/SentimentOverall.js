/* eslint-disable react/prop-types */
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from 'recharts';

export default class SentimentOverall extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['#3ED7BD', '#58AFC2', '#8884d8']
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

  handleCellClick = (value) => {
    //ask parent component to make API call and extract keywords and switch view to keywords
    console.log(value);
  }

  render() {
    return (
      <div className="data">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={this.props.data}
              fill="#8884d8"
              labelLine={false}
              label={this.renderPercentageLabel}
            >
              {this.props.data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={this.state.colors[index % this.state.colors.length]}
                  onClick={() => this.handleCellClick(entry)}
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
