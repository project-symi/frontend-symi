//styles
import "../styles/Index.css";
import "../styles/App.css";

//utils
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";

//MUI components
import { TextField, Button } from "@material-ui/core";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      password: "",
      token: "",
      permission: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://symi-be.herokuapp.com/login", { userId: this.state.userId, password: this.state.password });
    this.setState({ token: response.data.token, permission: response.data.permission });
  }

  render() {
    if (this.state.permission === "CEO") {
      cookie.set("token", this.state.token, { expires: 1 });
      Router.push("/ceo");
      return null;
    } else if (this.state.permission === "employee") {
      cookie.set("token", this.state.token, { expires: 1 });
      cookie.set("userId", this.state.userId, { expires: 1 });
      Router.push("/employee");
      return null;
    } else {
      return <div id="login-wrap">
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
        </div>
      </div>;
    }
  }
}
