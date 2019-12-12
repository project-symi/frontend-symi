import Link from 'next/link';
import '../styles/App.css';

const Dev = () => (
  <div id="dev">
    <Link href="/login">
      <button>Login</button>
    </Link>
    {/* <Link href="/employee">
      <button>Emp</button>
    </Link>
    <Link href="/admin">
      <button>Admin</button>
    </Link> */}
    {/* <Link href="/">
      <button>Login</button>
    </Link> */}
  </div>
);

export default Dev;
