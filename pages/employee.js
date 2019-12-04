import Navbar from '../components/Navbar';
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
      <div>
        <Navbar></Navbar>
        <Feedback submitFeedback={this.submitFeedback}></Feedback>
      </div>
    );
  }
}
