import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Welcome to Symi! </h1>
    <h3>Who are you?</h3>

    <Link href="/ceo">
      <button>CEO</button>
    </Link>
    
    <Link href="/employee">
      <button>Employee</button>
    </Link>
  </div>
);

export default Index;
