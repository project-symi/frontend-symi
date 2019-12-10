import Link from "next/link";
import "../styles/App.css";

const Dev = () => (
  <div id="dev">
    <Link href="/ceo">
      <button>CEO</button>
    </Link>
    <Link href="/employee">
      <button>Emp</button>
    </Link>
    <Link href="/admin">
      <button>Admin</button>
    </Link>
    {/* <Link href="/">
      <button>Login</button>
    </Link> */}
  </div>
);

export default Dev;
