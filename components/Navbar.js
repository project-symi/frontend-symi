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
      <div>
        [LOGO] SYMI
        {this.state.loggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    );
  }
}
