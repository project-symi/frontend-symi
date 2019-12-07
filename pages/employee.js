import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feedback from '../components/employeePage/Feedback';
import History from '../components/employeePage/FeedbackHistory';
import Rewards from '../components/employeePage/Rewards';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';

//dummy data for fuzzy name input
const employees = [
  { name: 'Mini Meow', department: 'Marketing', employeeID: '1234' },
  { name: 'Igor Dawg', department: 'HR', employeeID: '4321' },
  { name: 'Yukio Lion', department: 'Engineering', employeeID: '2345' },
  { name: 'Steffie Frog', department: 'Operations', employeeID: '6543' }
];

//dummy data of feedbacks
const feedbacks = [
  {
    feeling: 'good',
    about: { type: 'Employee', input: 'Igor' },
    note: 'he\'s super helpful and a hardworker',
    dateAdded: null,
    status: 'unseen'
  },
  {
    feeling: 'okay',
    about: { type: 'Category', input: 'Benefits' },
    note: 'there\'s no gym memebership',
    dateAdded: null,
    status: 'unseen'
  },
  {
    feeling: 'bad',
    about: { type: 'Category', input: 'Holidays' },
    note: 'I don\'t have Hanukkah off...',
    dateAdded: null,
    status: 'seen'
  }
];

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isDefaultView: true,
      currentlyShown: '',
      fuzzyNames: '',
      feedbacks: null,
      rewards: null
    };
  }

  componentDidMount() {
    //make an API call to get all the feedbacks

  }


  submitFeedback = feedbackObj => {
    console.log(feedbackObj);
    //make an API call to add the feebback to db
  };

  handleComponentView = (view) => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  }

  handleFuzzyNameSearch = (string) => {
    //make an API call to get fuzzy names and assign the return value to fuzzyNames property
    this.setState({ fuzzyNames: employees });
  }


  renderSwitchView = (param) => {
    switch (param) {
    case 'feedback':
      return <Feedback handleFuzzyNameSearch={this.handleFuzzyNameSearch}  submitFeedback={this.submitFeedback} fuzzyNames={this.state.fuzzyNames} />;
    case 'feedbackHistory':
      return <History />;
    case 'news':
      return <News />;
    case 'polls':
      return <Polls />;
    case 'invites':
      return <Invites />;
    case 'rewards':
      return <Rewards />;
    default:
      null;
    }
  }

  render() {
    return (
      <Layout>
        <Sidebar news={true} feedback={true} feedbackHistory={true} polls={true} invites={true} rewards={true} handleComponentView={this.handleComponentView} />
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
