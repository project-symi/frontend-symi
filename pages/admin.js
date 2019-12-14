/* eslint-disable react/no-unescaped-entities */
//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import News from '../components/News';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import About from '../components/About';
import '../styles/Admin.css';

import axios from 'axios';

//context API
import { AdminProvider } from '../contextApi/AdminContext';
import swal from '@sweetalert/with-react';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      news: null,
      newNews: {title: null, description: null, photo: null},
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
    });
    ;}

  ///////////////////////////////// NEWS
  getNews = async () => {
    const res = await axios.get('https://symi-be.herokuapp.com/auth/news',{ headers: { token: this.state.token } });
    const news = res.data;

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

  deleteNews = async (newsId) => {
    // call delete api
    await axios.delete(`https://symi-be.herokuapp.com/auth/news/${newsId}`, {headers: {token: this.state.token}});

    // set new state to show updated news
    this.setState({news: this.state.news.slice(1)});
  }

  uploadNews = async newsObj => {
    axios.post('', newsObj, {headers : {token: this.state.token}});
    let updatedNews = [newsObj, ... this.state.news];
    this.setState({news: updatedNews});
    const newNews = {
      'title': this.state.newNews.title,
      'description': this.state.newNews.desc,
      'photo': this.state.newNews.photoUrl
    };

  }


  ///////////////////////////////// EMPLOYEE UPLOAD
  addNewEmployee = addedEmployee => {
    if (Array.isArray(addedEmployee)) {
      console.log('use endpoint for bulk upload');
    } else {
      console.log('individual employee upload');
      this.setState({ addedEmployee });
    }
  };

  ///////////////////////////////// SIDEBAR
  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  renderSwitchView = param => {
    switch (param) {
    case 'employeeInput':
      return <EmployeeInput addNewEmployee={this.addNewEmployee} />;
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
        news: this.state.news,
        confirmDeleteNews: this.confirmDeleteNews,
        deleteNews: this.deleteNews,
        uploadNews: this.uploadNews,
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
