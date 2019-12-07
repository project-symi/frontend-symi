import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const dataset = [
  { name: "Premium Fridays", "😞": 400, "😐": 240, "😊": 240 },
  { name: "Bring Your Pup", "😞": 300, "😐": 139, "😊": 221 },
  { name: "Gym", "😞": 200, "😐": 980, "😊": 229 },
  { name: "KFC Christmas", "😞": 278, "😐": 390, "😊": 200 }
];

export default class SentimentbyNews extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["#3ED7BD", "#58AFC2", "#8884d8"],
      data: dataset
    };
  }

  render() {
    return (
      <div className="data-big">
        <AreaChart
          width={650}
          height={300}
          data={this.state.data}
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
