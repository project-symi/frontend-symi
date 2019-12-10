import Link from 'next/link';
import logo from '../assets/symi-small.png';

// MUI components
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

export default class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        {this.props.points ? (
          <div id="points"> {this.props.points + ' ⭐️'} </div>
        ) : null}
        <div id="logo">
          <img width="150px" src={logo} />
        </div>
        {/* <Button fontSize="small" color="primary" id="login">
          Logout
        </Button> */}
        <div id="user">
          <PersonIcon color="primary"></PersonIcon>
          <div>{this.props.userType}</div>
        </div>
      </div>
    );
  }
}
