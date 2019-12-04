import Link from 'next/link';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      accessType: null
    };
  }

  render() {
    return (
      <div>
        <h4>SIDEBAR</h4>
        {/* CEO VIEW */}
        <Link href="/ceo">
          <button> Dashboard </button>
        </Link>

        {/* EMPLOYEE VIEW */}
        <Link href="/employee">
          <button> Feedback </button>
        </Link>
        <Link href="/employee">
          <button> History </button>
        </Link>

        {/* ADMIN VIEW */}
        <Link href="/admin">
          <button> Employees </button>
        </Link>

        {/* ALL */}
        <Link href="/about">
          <button> About </button>
        </Link>
      </div>
    );
  }
}
