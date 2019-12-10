import Link from 'next/link';
import '../styles/Index.css';

//utils
import axios from 'axios';

//components
import { TextField, Button } from '@material-ui/core';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const response = axios.post('https://symi-be.herokuapp.com/login', { userId: this.state.userId, password: this.state.password });
    const token = response.data.token;
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
          {/* <h4>
            Do not have an account? <Link href="/register">Register here</Link>.
          </h4> */}
        </div>
      </div>
    );
  }
}
