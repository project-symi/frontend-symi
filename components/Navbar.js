import Link from 'next/link';
// import logo from "../assets/symilogo.png";
//components
import { Button } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';

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
        <div id="logo">
          <img width="150px" src={logo} />
        </div>
        <div id="user">
          <PersonIcon color="primary"></PersonIcon>
          <div>
            {/* {this.state.userPermission[0]} */}
            {console.log('userPermission', this.props)}
          </div>
        </div>
        <Button fontSize="small" color="primary" id="login">
          Logout
        </Button>
      </div>
    );
  }
}
