import Link from 'next/link';
// import logo from "../assets/symilogo.png";
//components
import { Button } from '@material-ui/core';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="navbar">
        <p id="logo">
          <img width="150px" src="https://i.ibb.co/Pm81mBV/symilogo.png" />
        </p>
        <Button color="secondary" id="login">
          Logout
        </Button>
      </div>
    );
  }
}
