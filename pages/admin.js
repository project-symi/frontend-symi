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
      currentlyShown: 'assignments',
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
      console.log({pastActive});
    }

    const active = document.getElementById(view);
    active.className = 'sidebar-button-active';
  }

  ///////////////////////////////// EMPLOYEES
getApprovedUsers = async () => {
  const res = await axios.get('https://symi-be.herokuapp.com/auth/users', { headers: {token: this.state.token} });
  const approvedUsers = res.data;

  console.log({approvedUsers});
  
  this.setState({approvedUsers});
}

  ///////////////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news',{ headers: { token: this.state.token } });
    const news = res.data;

    console.log({news});

    this.setState({news});

    //pop up for news
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
  deleteNews = async (newsId) => {
    // call delete api
    await axios.delete(`https://symi-be.herokuapp.com/auth/news/${newsId}`, {headers: {token: this.state.token}});

    // set new state to show updated news
    this.setState({news: this.state.news.slice(1)});
  }

  ////////ADD NEWS ITEM
  addNews = async newsObj => {
    await axios.post('https://symi-be.herokuapp.com/auth/news', newsObj, { headers : { token: this.state.token}});
  }


  ///////////////////////////////// EMPLOYEE UPLOAD
  addNewEmployee = async addedEmployee => {
    if (Array.isArray(addedEmployee)) {
      console.log(addedEmployee);
      //await axios.post('https://symi-be.herokuapp.com/auth/users/csv', addedEmployee, { headers: { 'token': this.state.token, 'Content-Type': 'application/json' } }).catch(err => console.log(err));
    } else {
      /////INDIVIDUAL UPLOAD////////
      console.log(addedEmployee);
      await axios.post('https://symi-be.herokuapp.com/auth/users', addedEmployee, { headers: { 'token': this.state.token, 'Content-Type': 'application/json' } }).catch(err => console.log(err));
      this.setState({ addedEmployee });
    }
  };

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
    }
  };

  render() {
    return (
      <AdminProvider value={{ userType: this.state.userType,
        employeeInput: true,
        news: this.state.news,
        assignments: true,
        polls: true,
        confirmDeleteNews: this.confirmDeleteNews,
        deleteNews: this.deleteNews,
        addNews: this.addNews,
        setActive: this.setActive,
        approvedUsers: this.state.approvedUsers,
        handleAdminComponentView: this.handleComponentView }} >
        <div className="layout">
          <Navbar />
          <Sidebar />
          <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
        </div>
      </AdminProvider>
    );
  }
}
