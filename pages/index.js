import '../styles/Index.css';

//utils
import axios from 'axios';

//components
import { TextField, Button } from '@material-ui/core';
import Ceo from './ceo';
import Employee from './employee';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      token: '',
      permission: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async e => {
    e.preventDefault();
    const response = await axios.post('https://symi-be.herokuapp.com/login', {
      userId: this.state.userId,
      password: this.state.password
    });
    console.log(response.data);
    this.setState({
      token: response.data.token,
      permission: response.data.permission
    });
  };

  render() {
    if (this.state.permission === 'CEO') {
      return <Ceo token={this.state.token} />;
    } else if (this.state.permission === 'employee') {
      return <Employee token={this.state.token} />;
    } else {
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
              label="EmployeeID"
              margin="normal"
              value={this.state.userId}
              onChange={this.handleInputChange}
            />
            <TextField
              name="password"
              id="outlined"
              label="Password"
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
          </div>
        </div>
      );
    }
  }
}
