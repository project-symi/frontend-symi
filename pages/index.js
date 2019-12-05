import Link from "next/link";
import "../styles/Index.css";

const Index = () => (
  <div id="login-wrap">
    <div id="login-container">
      <h1>Welcome to Symi! </h1>
      <div>
        {" "}
        <label>USERNAME</label> <input></input>
      </div>
      <div>
        <label>PASSWORD</label> <input type="password"></input>
        <h4>
          Don't have an account? <Link href="/register">Register here</Link>.
        </h4>
      </div>
    </div>
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
