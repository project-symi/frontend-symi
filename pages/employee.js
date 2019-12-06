import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feedback from '../components/employeePage/Feedback';
import History from '../components/employeePage/FeedbackHistory';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isDefaultView: true,
      currentlyShown: ''
    };
  }
  submitFeedback = feedbackObj => {
    console.log(feedbackObj);
  };

  handleComponentView = (view) => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  }

  renderSwitchView = (param) => {
    switch (param) {
    case 'feedback':
      return <Feedback submitFeedback={this.submitFeedback} />;
    case 'feedbackHistory':
      return <History />;
    case 'news':
      return <News />;
    case 'polls':
      return <Polls />;
    case 'invites':
      return <Invites />;
    default:
      null;
    }
  }

  render() {
    return (
      <Layout>
        <Sidebar news={true} feedback={true} feedbackHistory={true} polls={true} invites={true} handleComponentView={this.handleComponentView} />
        <div id="page">
          {
            this.state.isDefaultView ? <div><h1>Welcome to Symi!</h1>
              <h3>Start using the dashboard from checking what is happening in the company</h3></div> : null
          }
          {this.renderSwitchView(this.state.currentlyShown)}
        </div>
      </Layout>
    );
  }
}
