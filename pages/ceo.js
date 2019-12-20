/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

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

//context API
import { CeoProvider } from '../contextApi/CeoContext';

//sweet alert
import swal from '@sweetalert/with-react';
import '../assets/sweetalert.min.js';

// dummy data
import { topEmployees } from '../assets/dummyData';

export default class Ceo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyShown: 'dashboard',
      topEmployees: null,
      topDepartments: [
        { name: 'Engineering', points: 5500 },
        { name: 'Operations', points: 7000 },
        { name: 'Admin', points: 200 },
        { name: 'Marketing', points: 2300 },
        { name: 'Sales', points: 5000 },
        { name: 'QA', points: 5000 },
        { name: 'Part-Time', points: 5000 }
      ],
      categoryFeedbacks: null,
      topEmployeeFeedbacks: null,
      goodFeedbacks: null,
      mehFeedbacks: null,
      sadFeedbacks: null,
      feedbacksByFeelingRatio: null,
      news: null,
      userType: 'CEO',
      userId: '',
      token: ''
    };
  }

  componentDidMount() {
    //make an API call to db to get top employees data for dashboard
    //make an API call to get all feedbacks
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    this.setState({ token, userId }, () => {
      //API call to get all feedbacks
      this.getFeedbacks();

      //API call to db to get chart data
      this.getTopEmployees();
      this.getPositiveFeedbacks();
      this.getFeedbacksByCategory();

      this.getNews();

      this.setActive(this.state.currentlyShown);
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

  //////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news',{ headers: { token: this.state.token } });

    const news = res.data;

    this.setState({news});
  }

  //////////////////////// TOP RATED EMPLOYEES
  getTopEmployees = async () => {


    const res = await axios.get(
      'https://symi-be.herokuapp.com/auth/points',
      { headers: { token: this.state.token } }
    );
    const topEmployees = res.data;

    this.setState({
      topEmployees
    });
  };

getPositiveFeedbacks = async () => {
  const res = await axios.get('https://symi-be.herokuapp.com/auth/feedbacks?feeling=good', { headers: { token: this.state.token } });
  const topEmployeeFeedbacks = res.data;

  this.setState({topEmployeeFeedbacks});
}

//////////////////////// NEWS SENTIMENT
getFeedbacksByCategory = async () => {
  const dataset = [];
  const res = await axios.get('https://symi-be.herokuapp.com/auth/feedbacks', { headers: { token: this.state.token } });

  res.data.forEach((feedback) => {
    if (dataset.some((data) => {
      console.log('data.name', data.name);
      return data.name == feedback.category;})) {

      const dataToUpdate = dataset.filter((data)=>{return data.name == feedback.category;})[0];
      const dataToUpdateIndex = dataset.indexOf(dataToUpdate);
      dataset[dataToUpdateIndex];

      switch(feedback.feeling) {
      case 'good':
        dataset[dataToUpdateIndex]['😊'] = dataset[dataToUpdateIndex]['😊']+ 1;
        break;
      case 'meh':
        dataset[dataToUpdateIndex]['😐'] = dataset[dataToUpdateIndex]['😐'] + 1;
        break;
      case 'sad':
        dataset[dataToUpdateIndex]['😞'] = dataset[dataToUpdateIndex]['😞'] + 1;
        break;
      default:
      }

    } else {
      const dataToAdd = {
        name: feedback.category,
        '😞': 0,
        '😐': 0, 
        '😊': 0
      };

      switch(feedback.feeling) {
      case 'good':
        dataToAdd['😊'] = 1;
        break;
      case 'meh':
        dataToAdd['😐'] = 1;
        break;
      case 'sad':
        dataToAdd['😞'] = 1;
        break;
      default:
      }

      dataset.push(dataToAdd);
    }
  });

  this.setState({categoryFeedbacks: dataset});
}


  //////////////////////// OVERALL SENTIMENT
  getFeedbacks = async () => {
    //good fb
    const responseGood = await axios.get(
      'https://symi-be.herokuapp.com/auth/feedbacks?feeling=good',
      { headers: { token: this.state.token } }
    );
    //meh fb
    const responseMeh = await axios.get(
      'https://symi-be.herokuapp.com/auth/feedbacks?feeling=meh',
      { headers: { token: this.state.token } }
    );
    //sad fb
    const responseSad = await axios.get(
      'https://symi-be.herokuapp.com/auth/feedbacks?feeling=sad',
      { headers: { token: this.state.token } }
    );
    //create feedbacks ratio by feelings
    const feedbacksByFeelingRatio = [
      { name: '😊', value: 0, feeling: 'good' },
      { name: '😐', value: 0, feeling: 'meh' },
      { name: '😞', value: 0, feeling: 'sad' }
    ];

    feedbacksByFeelingRatio[0].value = responseGood.data.length;
    feedbacksByFeelingRatio[1].value = responseMeh.data.length;
    feedbacksByFeelingRatio[2].value = responseSad.data.length;

    this.setState({
      feedbacksByFeelingRatio,
      goodFeedbacks: responseGood.data,
      mehFeedbacks: responseMeh.data,
      sadFeedbacks: responseSad.data
    });
  };

  handleGetKeywords = async feeling => {
    let notes;
    switch (feeling) {
    case 'good':
      notes = this.state.goodFeedbacks.reduce((acc, feedback) => {
        acc.notes.push(feedback.note);
        acc.id.push(feedback.feedbackId);
        return acc;
      }, { notes: [], id: [] });
      break;
    case 'meh':
      notes = this.state.mehFeedbacks.reduce((acc, feedback) => {
        acc.notes.push(feedback.note);
        acc.id.push(feedback.feedbackId);
        return acc;
      }, { notes: [], id: [] });      break;
    default:
      notes = this.state.sadFeedbacks.reduce((acc, feedback) => {
        acc.notes.push(feedback.note);
        acc.id.push(feedback.feedbackId);
        return acc;
      }, { notes: [], id: [] });
      break;
    }

    const requestBody = {
      input_data: notes.notes,
      input_type: 'text',
      N: 10
    };


    ////////GET FEEDBACK KEYWORDS
    const response = await axios.post(
      'https://unfound-keywords-extraction-v1.p.rapidapi.com/extraction/keywords',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'unfound-keywords-extraction-v1.p.rapidapi.com',
          'x-rapidapi-key': 'bcffb61f87msh1010dd8a811c346p15d31fjsndd304d82eef3'
        }
      }
    );
    /////////////SHOW THE KEYWORDS IN POPUP
    swal({
      button: true,
      content: ( <div>
        <div className="popup-title">EMPLOYEES FEEL {feeling.toUpperCase()} ABOUT</div>
        <div id="keyword-container">
          {response.data.result.map(function(item, i){
            return <div key={item.id}  className="keyword">{item}</div>;
          })
          }
        </div>
      </div>
      )
    }).then((val) => axios.patch('https://symi-be.herokuapp.com/auth/feedbacks/status', notes.id, { headers: { token: this.state.token } }));
  };





  //////////////////////// VIEW
  handleComponentView = view => {
    this.setState({
      currentlyShown: view
    });
  };

  handleSendInvitation = invitationObj => {
    //make an API call to create an invitation
  };

  renderSwitchView = param => {
    switch (param) {
    case 'news':
      return <News />;
    case 'dashboard':
      return <Dashboard
      />;
    case 'assignments':
      return <Assignments /> ;
    case 'polls':
      return <Polls /> ;
    case 'invites':
      return <Invites /> ;
    case 'about':
      return <About /> ;
    default:
      null;
    }
  };

  render() {
    return (
      <CeoProvider value={{ userType: this.state.userType,
        news: this.state.news,
        assignments: true,
        polls: true,
        dashboard: true,
        invites: true,
        topEmployeeFeedbacks: this.state.topEmployeeFeedbacks,
        categoryFeedbacks: this.state.categoryFeedbacks,
        topEmployees: this.state.topEmployees,
        overallSentiment: this.state.feedbacksByFeelingRatio,
        topDepartments: this.state.topDepartments,
        handleCeoComponentView: this.handleComponentView,
        handleSendInvitation: this.handleSendInvitation,
        handleGetKeywords: this.handleGetKeywords,
        setActive: this.setActive
      }}>
        <div className="layout">
          <Navbar />
          <Sidebar
          />
          <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
        </div>
      </CeoProvider>
    );
  }
}
