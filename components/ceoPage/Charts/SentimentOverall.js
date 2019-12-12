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

//contextAPI
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

  handleCellClick = (value) => {
    //ask parent component to make an API call to get keywords and switch view to keywords
    this.props.handleGetKeywords(value.feeling);
  }

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
                    onClick={() => this.handleCellClick(entry)}
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
