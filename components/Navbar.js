import Link from 'next/link';
// import logo from "../assets/symilogo.png";
//components
import { Button } from '@material-ui/core';
import logo from '../assets/symi-small.png';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 500
    };
  }

  render() {
    return (
      <div id="navbar">
        <div id="points"> {this.state.points} ⭐️</div>
        <p id="logo">
          <img width="150px" src={logo} />
        </p>
        <Button fontSize="small" color="primary" id="login">
          Logout
        </Button>
      </div>
    );
  }
}
