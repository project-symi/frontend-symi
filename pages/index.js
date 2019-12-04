import Link from "next/link";

const Index = () => (
  <div>
    <h1>Welcome to Symi! </h1>
    <label>USERNAME</label> <input></input>
    <label>PASSWORD</label> <input type="password"></input>
    <h3>Who are you?</h3>
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
