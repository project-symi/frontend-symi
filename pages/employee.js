import Layout from '../components/Layout';
import Feedback from '../components/employeePage/Feedback';

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
        <Feedback submitFeedback={this.submitFeedback}></Feedback>
      </Layout>
    );
  }
}
