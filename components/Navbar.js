/* eslint-disable react/prop-types */
import logo from '../assets/symi-small.png';

// MUI components
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';

//next.js
import Link from 'next/link';

//context API
import { EmployeeConsumer } from '../contextApi/EmployeeContext';

const Navbar = () => {
  return (
    <EmployeeConsumer>
      {
        props => {
          return (<div id="navbar">
            {props.points ? (
              <div id="points"> {props.points + ' ⭐️'} </div>
            ) : null}
            <div id="logo">
              <img width="150px" src={logo} />
            </div>
            <div id="user">
              <PersonIcon color="primary"></PersonIcon>
              <div>{props.userType}</div>
            </div>
            <Link href="/logout">
              <Button fontSize="small" color="primary" id="login">
            Logout
              </Button>
            </Link>
          </div>
          );
        }
      }
    </EmployeeConsumer>
  );
};

export default Navbar;
