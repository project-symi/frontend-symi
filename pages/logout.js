//next.js
import Link from 'next/link';

//styles
import '../styles/App.css';
import '../styles/Index.css';

//MUI components
import { Button } from '@material-ui/core';

const Logout = () => {
  //remove all essential info from localStorage
  // localStorage.removeItem('userId');
  // localStorage.removeItem('token');
  return (
    <div id="login-wrap">
      <div id="login-container">
        <img id="login-logo" src="https://i.ibb.co/Pm81mBV/symilogo.png"></img>
        <div>
          <h3>Logged out successfully</h3>
          <Link href="/">
            <Button fontSize="small" color="primary" id="login">
              Want to login back?
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
