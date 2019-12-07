import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { AreaChart, Area } from 'recharts';

import SentimentOverall from './Charts/SentimentOverall';
import SentimentbyCategory from './Charts/SentimentbyCategory';
import SentimentbyNews from './Charts/SentimentbyNews';
import SentimentbyDept from './Charts/SentimentbyDept';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      topEmployees: []
    };
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
      <div>
        <p className="title">CEO Dashboard</p>
        <div id="data-container">
          <div>
            <p className="data-title">OVERALL SENTIMENT</p>
            <SentimentOverall />
          </div>
          <div>
            <p className="data-title">SENTIMENT BY CATEGORY</p>
            <SentimentbyCategory />
          </div>
        </div>
        <div id="data-container-big">
          <div>
            <p className="data-title">SENTIMENT BY DEPARTMENT</p>
            <SentimentbyDept />
          </div>
          <div id="data-container-big">
            <div>
              <p className="data-title">SENTIMENT BY NEWS</p>
              <SentimentbyNews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
