//components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feedback from '../components/employeePage/Feedback';
import Rewards from '../components/employeePage/Rewards';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';
import About from '../components/About';

//utils
import axios from 'axios';

//styles
import '../styles/Employee.css';

//dummy data for fuzzy name input
const employees = [
  { name: 'Mini Meow', department: 'Marketing', employeeId: '1234' },
  { name: 'Igor Dawg', department: 'HR', employeeId: '4321' },
  { name: 'Yukio Lion', department: 'Engineering', employeeId: '2345' },
  { name: 'Steffie Frog', department: 'Operations', employeeId: '6543' }
];

const rewards = [
  {
    points: 50,
    category: 'positive feedback',
    dateAdded: '01/12/2019',
    correspondentId: '1111'
  },
  {
    points: 5,
    category: 'poll',
    dateAdded: '02/12/2019',
    correspondentId: '6'
  },
  {
    points: 10,
    category: 'submitted feedback',
    dateAdded: '04/12/2019',
    correspondentId: '2222'
  }
];

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isDefaultView: true,
      currentlyShown: 'news',
      fuzzyNames: '',
      feedbacks: null,
      rewards: null,
      currentEmployeeId: 'X009999'
    };
  }

  componentDidMount() {
    //make an API call to get all the feedbacks made by this user
    //make another API call to get all points
    this.handleGetFeedbacks().then(() => this.setState({ rewards }, () => console.log(this.state.feedbacks)));
  }

  handleGetFeedbacks = async () => {
    const response = await axios.get(`https://symi-be.herokuapp.com/feedbacks/${this.state.currentEmployeeId}`);
    this.setState({ feedbacks: response.data });
  }

  //callback for Feedback to submit the feedback
  submitFeedback = async (feedbackObj) => {
    //add current employeeId to the feedback object (for the feedback history)
    feedbackObj.employeeId = this.state.employeeId;
    //make an API call to add the feedback to db
    axios.post('https://symi-be.herokuapp.com/feedbacks/')
    console.log(feedbackObj, ' feedback was sent to db');
    //check whether feedback category is employee, if yes make another API call to add points
    if (feedbackObj.category === 'Employee') {
      //API call to db points table, add 10 points toemployee (employeeId will the subcategory)
      // /api/points/:employeeId (${feedback.subcategory} (since it's employee id))
      console.log(feedbackObj.subcategory, ' received 10 points');
    }
    this.setState({ fuzzyNames: '' });
  };

  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  //callback for Feedback submit to get employee names
  handleFuzzyNameSearch = string => {
    //make an API call to get fuzzy names and assign the return value to fuzzyNames property
    this.setState({ fuzzyNames: employees });
  };

  handleRewardDetails = (id, category) => {
    switch (category) {
    case 'positive feedback':
      const feedbackDetails = feedbacks.find(feedback => feedback.id === id);
      return feedbackDetails.note;
    case 'poll':
      return 'dummy poll';
    case 'submitted feedback':
      return 'dummy submitted feedback';
    default:
      return null;
    }
  };

  renderSwitchView = param => {
    switch (param) {
    case 'feedback':
      return (
        <Feedback
          feedbacks={this.state.feedbacks}
          handleFuzzyNameSearch={this.handleFuzzyNameSearch}
          submitFeedback={this.submitFeedback}
          fuzzyNames={this.state.fuzzyNames}
        />
      );
    case 'news':
      return <News />;
    case 'polls':
      return <Polls />;
    case 'rewards':
      return (
        <Rewards
          rewards={this.state.rewards}
          handleRewardDetails={this.handleRewardDetails}
        />
      );
    case 'invites':
      return <Invites />;
    case 'about':
      return <About />;
    default:
      null;
    }
  };

  render() {
    return (
      <div className="layout">
        <Navbar />
        <Sidebar
          news={true}
          feedback={true}
          polls={true}
          invites={true}
          rewards={true}
          handleComponentView={this.handleComponentView}
        />
        <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
      </div>
    );
  }
}
