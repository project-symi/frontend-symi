import Link from 'next/link';

//components
import { Button } from '@material-ui/core';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="navbar">
        <p id="logo">[LOGO] SYMI</p>
        <Button color="secondardy" id="login">
          Logout
        </Button>
      </div>
    );
  }
}
