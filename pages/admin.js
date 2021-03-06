/* eslint-disable react/no-unescaped-entities */
import React from 'react';

//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import News from '../components/News';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import About from '../components/About';
import RewardsEdit from '../components/adminPage/RewardsEdit';
import '../styles/Admin.css';

//////////////CONTEXT API
import { AdminProvider } from '../contextApi/AdminContext';
import swal from '@sweetalert/with-react';

////////////UTILS
import axios from 'axios';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      approvedUsers: null,
      news: null,
      addedEmployee: null,
      isDefaultView: true,
      currentlyShown: 'employeeInput',
      userType: 'Admin',
      userId: '',
      token: ''
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    this.setState({ token, userId }, () => {
      //API call to get news
      this.getNews();

      this.setActive(this.state.currentlyShown);

      this.getApprovedUsers();
    });
    ;}

  setActive(view) {
    if (document.getElementsByClassName('sidebar-button-active')[0]) {
      const pastActive = document.getElementsByClassName('sidebar-button-active');
      pastActive[0].className ='sidebar-button';
    }

    const active = document.getElementById(view);
    active.className = 'sidebar-button-active';
  }

  ///////////////////////////////// EMPLOYEES
 getApprovedUsers = async () => {
   const res = await axios.get('https://symi-be.herokuapp.com/auth/users', { headers: { token: this.state.token } });
   this.setState({ approvedUsers: res.data });
 }

  ///////////////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news',{ headers: { token: this.state.token } });
    this.setState({ news: res.data });
  }

  confirmDeleteNews = newsId => {
    // confirm delete pop up
    swal({
      title: 'Are you sure you want to delete this?',
      icon: 'warning',
      buttons: {
        confirm: {
          text: 'DELETE',
          value: 'delete'
        },
        cancel: {
          text: 'CANCEL',
          value: 'cancel'
        }},
      dangerMode: true,
    })
      .then((val) => {
        if (val === 'delete') {
          this.deleteNews(newsId);
          swal(
            {title: 'Deleted successfully',
              icon: 'success',
            });
        }
      });
  }


  ///////DELETE NEWS ITEM
  deleteNews = async (id) => {
    const newsToDelete = this.state.news.filter((newsItem)=>{
      return newsItem.newsId == id;})[0];

    // call delete api
    await axios.delete(`https://symi-be.herokuapp.com/auth/news/${id}`, {headers: {token: this.state.token}});

    // set new state to show updated news
    const indexOfNewsToDelete = this.state.news.indexOf(newsToDelete);
    const newsCopy = [...this.state.news];
    newsCopy.splice(indexOfNewsToDelete,1);
    this.setState({news: newsCopy});
  }

  ////////ADD NEWS ITEM
  addNews = async newsObj => {
    await axios.post('https://symi-be.herokuapp.com/auth/news', newsObj, { headers : { token: this.state.token}});

    const newsCopy = [newsObj, ...this.state.news];
    this.setState({news: newsCopy});
  }


  ///////////////////////////////// EMPLOYEE UPLOAD
  addNewEmployee = async addedEmployee => {
    if (Array.isArray(addedEmployee)) {
      await axios.post('https://symi-be.herokuapp.com/auth/users/csv', addedEmployee, { headers: { token: this.state.token, 'Content-Type': 'application/json' } });
    } else {
      /////INDIVIDUAL UPLOAD////////
      await axios.post('https://symi-be.herokuapp.com/auth/users', addedEmployee, { headers: { token: this.state.token, 'Content-Type': 'application/json' } });
      this.setState({ addedEmployee });
    }
  };

  editReward = async (reward) => {
    await axios.patch('https://symi-be.herokuapp.com/auth/rewards', reward, { headers: { token: this.state.token, 'Content-Type': 'application/json' } });
  }

  ///////////////////////////////// SIDEBAR
  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  renderSwitchView = view => {
    switch (view) {
    case 'employeeInput':
      return <EmployeeInput />;
    case 'news':
      return <News />;
    case 'assignments':
      return <Assignments />;
    case 'polls':
      return <Polls />;
    case 'about':
      return <About />;
    case 'rewardsEdit':
      return <RewardsEdit />;
    default:
      null;
    }
  };

  render() {
    return (
      <AdminProvider value={{ userType: this.state.userType,
        employeeInput: true,
        news: this.state.news,
        assignments: true,
        polls: true,
        rewardsEdit: true,
        confirmDeleteNews: this.confirmDeleteNews,
        deleteNews: this.deleteNews,
        addNews: this.addNews,
        setActive: this.setActive,
        approvedUsers: this.state.approvedUsers,
        handleAdminComponentView: this.handleComponentView,
        editReward: this.editReward }}>
        <div className="layout">
          <Navbar />
          <Sidebar />
          <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
        </div>
      </AdminProvider>
    );
  }
}
