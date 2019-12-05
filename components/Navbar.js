import Link from 'next/link';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div id="navbar">
        <p id="logo">[LOGO] SYMI</p>
        {this.state.loggedIn ? (
          <button id="login">Logout</button>
        ) : (
          <button id="login">Login</button>
        )}
      </div>
    );
  }
}
