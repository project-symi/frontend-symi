/* eslint-disable react/no-unescaped-entities */
//components
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../components/ceoPage/Dashboard';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';
import About from '../components/About';

//styles
import '../styles/CEO.css';

//utils
import axios from 'axios';

//top employees dummy data (for now)
const topEmployees = [
  { name: 'Igor Dawg', points: 500, employeeId: 3 },
  { name: 'Mini Meow', points: 400, employeeId: 1 },
  { name: 'Yukio Lion', points: 100, employeeId: 2 },
  { name: 'Steffie Frog', points: 150, employeeId: 4 },
  { name: 'Potato Fan', points: 300, employeeId: 5 }
];

// feedback sentiment by category dummy data
const feedbacksByFeeling = [
  { name: '😊', value: 40, feeling: 'good' },
  { name: '😐', value: 30, feeling: 'meh' },
  { name: '😞', value: 34, feeling: 'sad' }
];

export default class Ceo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentlyShown: 'dashboard',
      topEmployees: null,
      goodFeedbacks: null,
      mehFeedbacks: null,
      sadFeedBacks: null,
      feedbacksByFeelingRatio: null
    };
  }

  componentDidMount() {
    //make an API call to db to get top employees data for dashboard
    //make an API call to get all feedbacks
    this.getFeedbacks();
    this.setState({ topEmployees });
  }

  getFeedbacks = async () => {
    //all fbs
    const response = await axios.get('https://symi-be.herokuapp.com/feedbacks');
    //change data to format applicable by overall centiment chart
    const feedbacksByFeelingRatio = response.data.reduce((acc, feedback) => {
      switch (feedback.feeling) {
      case 'good':
        acc[0].value++;
        break;
      case 'meh':
        acc[1].value++;
        break;
      default:
        acc[2].value++;
        break;
      };
      return acc;
    }, [
      { name: '😊', value: 0, feeling: 'good' },
      { name: '😐', value: 0, feeling: 'meh' },
      { name: '😞', value: 0, feeling: 'sad' }
    ]);
    console.log(feedbacksByFeelingRatio);
    //good fb
    const responseGood = await axios.get('https://symi-be.herokuapp.com/feedbacks?feeling=good');
    //meh fb
    const responseMeh = await axios.get('https://symi-be.herokuapp.com/feedbacks?feeling=meh');
    //sad fb
    const responseSad = await axios.get('https://symi-be.herokuapp.com/feedbacks?feeling=sad');
    //create feedbacks ratio by feelings
    this.setState({ feedbacksByFeelingRatio, goodFeedbacks: responseGood.data, mehFeedbacks: responseMeh.data, sadFeedBacks: responseSad.data });
  }

  //decide which component to render
  handleComponentView = view => {
    this.setState({ currentlyShown: view });
  };

  handleSendInvitation = invitationObj => {
    //make an API call to create an invitation
    console.log(invitationObj, ' invitation was sent');
  };

  renderSwitchView = param => {
    switch (param) {
    case 'news':
      return <News />;
    case 'dashboard':
      return <Dashboard handleSendInvitation={this.handleSendInvitation} topEmployees={this.state.topEmployees} overallSentiment={this.state.feedbacksByFeelingRatio} />;
    case 'assignments':
      return <Assignments />;
    case 'polls':
      return <Polls />;
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
          assignments={true}
          polls={true}
          dashboard={true}
          invites={true}
          handleComponentView={this.handleComponentView}
        />
        <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
      </div>
    );
  }
}
