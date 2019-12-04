import Link from 'next/link';

const Navbar = () => (
  <div>
    <Link href="/">
      <button> Home </button>
    </Link>
    <Link href="/about">
      <button> About </button>
    </Link>
  </div>
);

export default Navbar;
