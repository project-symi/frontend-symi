import Link from 'next/link';
import Login from '../components/Login';

const Index = () => (
  <div>
    <Login />
    <Link href="/ceo">
      <button>CEO</button>
    </Link>
    <Link href="/employee">
      <button>Employee</button>
    </Link>
    <Link href="/admin">
      <button>Admin</button>
    </Link>
  </div>
);

export default Index;
