/* eslint-disable react/prop-types */
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

//dummy data
import { totalPoints, rewards } from '../assets/dummyData';

//context API
import { EmployeeProvider } from '../contextApi/EmployeeContext';
import swal from 'sweetalert';


export default class Employee extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isDefaultView: true,
      currentlyShown: 'feedback',
      fuzzyNames: '',
      feedbacks: null,
      news: null,
      rewards: [
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
      ],
      userType: 'Employee',
      points: 450,
      userId: '',
      token: ''
    };
  }


  componentDidMount() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    this.setState({ token, userId }, () => {
      //API call to get all the feedbacks made by this user
      this.handleGetFeedbacks();

      //API call to get total points
      this.handleUpdatePoints();

      //API call to get reward/points history
      this.handleGetRewards();

      //API call to get news
      this.getNews();
    });
  }


  ///////////////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news',{ headers: { token: this.state.token } });
    const news = res.data;

    console.log({news});

    this.setState({news});
  }

  directNewsFeedback = () => {
    /// for news
  }

  ///////////////////////////////// POINTS
  // TOTAL POINTS
  handleUpdatePoints = async () => {
    // const res = await axios.get(
    //   `https://symi-be.herokuapp.com/auth/users/${this.state.userId}/total_points`,
    //   {
    //     headers: { token: this.state.token }
    //   }
    // );
    // console.log(res);
    // const totalPoints = res.data

    this.setState({ totalPoints });
  };

  newPointsPopup = () => {
    swal({
      title: 'Thanks for the feedback',
      text: 'You got +25⭐️! Hooray!',
      icon: 'success',
      button: true
    });
  }


  ///////////////////////////////// REWARDS
  // REWARDS HISTORY
  handleGetRewards = async () => {
    // const res = await axios.get(
    //   `https://symi-be.herokuapp.com/auth/users/${this.state.userId}/point`,
    //   {
    //     headers: { token: this.state.token }
    //   }
    // );
    // console.log(res);
    // const rewards = res.data

    this.setState({ rewards });
  };

  ///////////////////////////////// FEEDBACK
  // FUZZY SEARCH
  handleFuzzyNameSearch = async string => {
    //make an API call to get fuzzy names and assign the return value to fuzzyNames property
    const response = await axios.get(
      `https://symi-be.herokuapp.com/auth/users?name=${string}`,
      { headers: { token: this.state.token } }
    );
    this.setState({ fuzzyNames: response.data });
  };

  deleteFuzzyNames = () => {
    this.setState({ fuzzyNames: '' });
  };

  // SUBMIT FEEDBACK
  submitFeedback = async feedbackObj => {
    //add current employeeId to the feedback object (for the feedback history)
    feedbackObj.employeeId = this.state.userId;

    //make an API call to add the feedback to the db
    await axios.post('https://symi-be.herokuapp.com/auth/feedbacks', feedbackObj, { headers: { token: this.state.token } });
    let addedFeedback = [...this.state.feedbacks];
    addedFeedback.unshift(feedbackObj);
    this.setState({ feedbacks: addedFeedback });
    this.deleteFuzzyNames();

    this.newPointsPopup();

    // update points after submitting feedback
    this.handleUpdatePoints();
  };

  // FEEDBACK HISTORY
  handleGetFeedbacks = async () => {
    console.log(this.state.token, this.state.userId, 'get feedbacks');
    const response = await axios.get(
      `https://symi-be.herokuapp.com/auth/feedbacks/${this.state.userId}`,
      { headers: { token: this.state.token } }
    );

    const feedbacks = response.data.sort((a, b) => {
      a = new Date(a.dateAdded);
      b = new Date(b.dateAdded);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    this.setState({ feedbacks });
  };

  ///////////////////////////////// VIEW
  handleComponentView = view => {
    this.setState({
      currentlyShown: view,
      isDefaultView: false
    });
  };

  ///////////////////////////////// SIDEBAR
  renderSwitchView = param => {
    switch (param) {
    case 'feedback':
      return (
        <Feedback />
      );
    case 'news':
      return <News />;
    case 'polls':
      return <Polls />;
    case 'rewards':
      return (
        <Rewards />
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
      <EmployeeProvider value={{ 
        userType: this.state.userType,
        points: this.state.points,
        news: this.state.news,
        feedback: true,
        polls: true,
        invites: true,
        rewards: true,
        directNewsFeedback: this.directNewsFeedback,
        handleComponentView: this.handleComponentView,
        feedbacks: this.state.feedbacks,
        handleFuzzyNameSearch: this.handleFuzzyNameSearch,
        submitFeedback: this.submitFeedback,
        fuzzyNames: this.state.fuzzyNames,
        deleteFuzzyNames: this.deleteFuzzyNames,
        rewards: this.state.rewards,
        handleRewardDetails: this.handleRewardDetails
      }}>
        <div className="layout">
          <Navbar />
          <Sidebar />
          <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
        </div>
      </EmployeeProvider>
    );
  }
}
