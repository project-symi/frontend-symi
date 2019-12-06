import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
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
        <Sidebar />
        <div id="page">
          <Feedback submitFeedback={this.submitFeedback} />
          <History />
        </div>
      </Layout>
    );
  }
}
