import Link from 'next/link';
// import logo from "../assets/symilogo.png";
//components
import { Button } from '@material-ui/core';
import logo from '../assets/symi-small.png';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="navbar">
        <p id="logo">
          <img width="150px" src={logo} />
        </p>
        <Button color="secondary" id="login">
          Logout
        </Button>
      </div>
    );
  }
}
