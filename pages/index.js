/* eslint-disable react/prop-types */
import React from 'react';
import About from '../components/About';

//styles
import '../styles/Index.css';
import '../styles/App.css';

//utils
import axios from 'axios';
import Router from 'next/router';

//MUI components
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: theme.spacing(4),
    maxWidth: '80%',
  },
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      token: '',
      permission: '',
      isAboutShown: false
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async e => {
    e.preventDefault();
    const response = await axios.post('https://symi-be.herokuapp.com/login', { userId: this.state.userId, password: this.state.password });
    this.setState({ token: response.data.token, permission: response.data.permission });
    localStorage.setItem('token', this.state.token);
    localStorage.setItem('userId', this.state.userId);
  }

  handleShowAboutPage = () => {
    this.setState({ isAboutShown: !this.state.isAboutShown });
  }

  render() {
    const { classes } = this.props;
    if (this.state.permission === 'CEO' && !this.state.isAboutShown) {
      Router.push('/ceo');
      return null;
    } else if (this.state.permission === 'employee' && !this.state.isAboutShown) {
      Router.push('/employee');
      return null;
    } else if (this.state.permission === 'admin' && !this.state.isAboutShown) {
      Router.push('/admin');
      return null;
    } else if (!this.state.isAboutShown) {
      return (
        <div id="login-wrap">
          <div id="login-container">
            <img
              id="login-logo"
              src="https://i.ibb.co/Pm81mBV/symilogo.png"
            ></img>
            <TextField
              name="userId"
              id="outlined"
              variant="filled"
              label="employeeId"
              margin="normal"
              value={this.state.userId}
              onChange={this.handleInputChange}
            />
            <TextField
              name="password"
              id="outlined"
              label="password"
              margin="normal"
              variant="filled"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Button
              onClick={this.handleLogin}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <span id="get-access">
              Don&apos;t have an account? <a
                onClick={this.handleShowAboutPage}
                variant="contained"
                color="primary"
              >Get access.
              </a>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <div id="about-page">
            <Button variant="contained" size="small" color="primary" style={{ color:'white', cursor: 'pointer' }} onClick={this.handleShowAboutPage} >
                  « BACK
            </Button>
            <About />
          </div>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Login);
