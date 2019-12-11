import Link from 'next/link';
import '../styles/Index.css';

import About from './About';

//util functions
import { formValidation } from '../utils/utils';

//components
import { TextField, Button } from '@material-ui/core';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin() {
    e.preventDefault();
  }

  render() {
    return (
      <div id="login-wrap">
        <div id="login-container">
          <img
            id="login-logo"
            src="https://i.ibb.co/Pm81mBV/symilogo.png"
          ></img>
          <TextField
            name="email"
            id="outlined"
            variant="filled"
            label="email"
            margin="normal"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <TextField
            name="password"
            label="password"
            margin="normal"
            variant="filled"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            id="standard-password-input"
            autoComplete="current-password"
          />
          <Button
            onClick={this.handleLogin}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <h4>
            Do not have an account? <Link href="/register">Register here</Link>.
          </h4>
        </div>
      </div>
    );
  }
}
