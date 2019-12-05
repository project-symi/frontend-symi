import Layout from '../components/Layout';
import Feedback from '../components/employeePage/Feedback';
import History from '../components/employeePage/FeedbackHistory';

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  submitFeedback = feedbackObj => {
    console.log(feedbackObj);
  };

  render() {
    return (
      <Layout>
        <h2>EMPLOYEE PAGE</h2>
        <Feedback submitFeedback={this.submitFeedback} />
        <History />
      </Layout>
    );
  }
}
