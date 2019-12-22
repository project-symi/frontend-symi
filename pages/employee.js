/* eslint-disable react/prop-types */
import React from 'react';

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

//context API
import { EmployeeProvider } from '../contextApi/EmployeeContext';
import swal from 'sweetalert';


export default class Employee extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      prizePoints: 500,
      prize: '$50 Amazon Gift Card',
      isDefaultView: true,
      currentlyShown: 'feedback',
      fuzzyNames: '',
      feedbacks: null,
      news: null,
      rewards: null,
      newsFeedback: null,
      userType: 'Employee',
      totalPoints: 0,
      invitations: null,
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

      this.setActive(this.state.currentlyShown);

      this.getInvitations();

      // check if user reached prize amount
      this.reachedPrizeAmount;
    });
  }

  setActive(view) {
    if (document.getElementsByClassName('sidebar-button-active')[0]) {
      const pastActive = document.getElementsByClassName('sidebar-button-active');
      pastActive[0].className ='sidebar-button';
    }

    const active = document.getElementById(view);
    active.className = 'sidebar-button-active';
  }


  ///////////////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news', { headers: { token: this.state.token } });
    const news = res.data;

    this.setState({news});
  }

  directNewsFeedback = (news) => {
    /// for news
    this.setState({ newsFeedback: news, currentlyShown: 'feedback', isDefaultView: false });
  }

  handleResetNewsFeedback = () => {
    this.setState({ newsFeedback: null });
  }


  ///////////////////////////////// POINTS
  // TOTAL POINTS
  handleUpdatePoints = async () => {
    const res = await axios.get(
      `https://symi-be.herokuapp.com/auth/users/${this.state.userId}`,
      {
        headers: { token: this.state.token }
      }
    );

    const totalPoints = res.data.totalPoints;

    this.setState({ totalPoints });
  };

  newPointsPopup = () => {
    swal({
      title: '+25⭐️! Hooray!',
      text: 'Thanks for the feedback!',
      icon: 'success',
      button: true
    });
  }


  ///////////////////////////////// REWARDS
  // REWARDS HISTORY
  handleGetRewards = async () => {
    const res = await axios.get(
      `https://symi-be.herokuapp.com/auth/points/${this.state.userId}`,
      {
        headers: { token: this.state.token }
      }
    );

    const rewards = res.data;

    this.setState({ rewards });
  };

  // GOT PRIZE
  reachedPrizeAmount = () => {
    if (this.state.totalPoints >= this.state.prizePoints) {
      swal({
        title: `Congrats! You're now eligible for ${this.state.prize}!`,
        text: 'Your HR will contact you shortly!',
        icon: 'success',
        button: true
      });
    }
  }

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

    // show newly added feedback
    let addedFeedback = [...this.state.feedbacks];
    addedFeedback.unshift(feedbackObj);

    console.log({feedbackObj});

    this.setState({ feedbacks: addedFeedback });

    console.log(this.state.feedbacks);

    this.deleteFuzzyNames();

    // new points notifcation
    this.newPointsPopup();

    // update points after submitting feedback
    this.handleUpdatePoints();
  };

  // FEEDBACK HISTORY
  handleGetFeedbacks = async () => {
    const response = await axios.get(
      `https://symi-be.herokuapp.com/auth/feedbacks/${this.state.userId}`,
      { headers: { token: this.state.token } }
    );

    // sorts by date
    if (response.data) {
      const feedbacks = response.data.sort((a, b) => {
        a = new Date(a.dateAdded);
        b = new Date(b.dateAdded);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      this.setState({ feedbacks });
    }
  };

  ///////////////////////////////// VIEW
  handleComponentView = view => {
    this.setState({
      currentlyShown: view,
      isDefaultView: false
    });
  };

  ////////////////////INVITES
  getInvitations = async () => {
    const response = await axios.get(`https://symi-be.herokuapp.com/auth/invitations/${this.state.userId}`, { headers: { token: this.state.token }});
    this.setState({ invitations: response.data });
  }

  ///////////////////HANDLE INVITES FROM CEO/LEADER
  handleInvitation = async (invitation, answer) => {
    const reply = {
      status: answer.status ? 'Accepted' : 'Declined',
      reply: answer.reply
    };
    await axios.patch(`https://symi-be.herokuapp.com/auth/invitations/${invitation.invitationId}`, reply, { headers: { token: this.state.token }} );
    let renewedInvitation = this.state.invitations.find(invite => invite.invitationId === invitation.invitationId);
    const index = this.state.invitations.indexOf(renewedInvitation);
    renewedInvitation.status = reply.status;
    renewedInvitation.reply = reply.reply;
    const updatedInvitations = [...this.state.invitations];
    updatedInvitations.splice(index, 1, renewedInvitation);
    this.setState({ invitations: updatedInvitations });
  }

  ///////////////////////////////// SIDEBAR
  renderSwitchView = param => {
    switch (param) {
    case 'feedback':
      return <Feedback />;
    case 'news':
      return <News />;
    case 'polls':
      return <Polls />;
    case 'rewards':
      return <Rewards />;
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
        totalPoints: this.state.totalPoints,
        news: this.state.news,
        feedback: true,
        polls: true,
        invites: true,
        rewards: true,
        prizePoints: this.state.prizePoints,
        prize: this.state.prize,
        newsFeedback: this.state.newsFeedback,
        handleResetNewsFeedback: this.handleResetNewsFeedback,
        directNewsFeedback: this.directNewsFeedback,
        handleComponentView: this.handleComponentView,
        feedbacks: this.state.feedbacks,
        handleFuzzyNameSearch: this.handleFuzzyNameSearch,
        submitFeedback: this.submitFeedback,
        fuzzyNames: this.state.fuzzyNames,
        deleteFuzzyNames: this.deleteFuzzyNames,
        rewards: this.state.rewards,
        invitations: this.state.invitations,
        handleRewardDetails: this.handleRewardDetails,
        handleInvitation: this.handleInvitation,
        setActive: this.setActive,
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
