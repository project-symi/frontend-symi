/* eslint-disable react/prop-types */

//charts
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell
} from 'recharts';

//images
import Loader from '../../../assets/loader_img.gif';

//context API
import CeoContext from '../../../contextApi/CeoContext';

export default class SentimentOverall extends React.Component {
  static contextType = CeoContext;

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

  render() {
    return (
      <div className="data">
        <ResponsiveContainer>
          {this.context.overallSentiment ?
            <PieChart>
              <Pie
                dataKey="value"
                data={this.context.overallSentiment}
                fill="#8884d8"
                labelLine={false}
                label={this.renderPercentageLabel}
              >
                {this.context.overallSentiment.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={this.state.colors[index % this.state.colors.length]}
                    onClick={() => this.context.handleGetKeywords(entry.feeling)}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            : <img src={Loader}></img>
          }
        </ResponsiveContainer>
      </div>
    );
  }
}
