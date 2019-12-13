/* eslint-disable react/prop-types */
import logo from '../assets/symi-small.png';

// MUI components
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';

//next.js
import Link from 'next/link';

//context API
import EmployeeContext from '../contextApi/EmployeeContext';
import CeoContext from '../contextApi/CeoContext';
import { useContext } from 'react';

const Navbar = () => {

  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);

  return (<div id="navbar">
    {employeeProps.points ? (
      <div id="points"> {employeeProps.points + ' ⭐️'} </div>
    ) : null}
    <div id="logo">
      <img width="150px" src={logo} />
    </div>
    <div id="user">
      <PersonIcon color="primary"></PersonIcon>
      <div>{Object.keys(employeeProps).length > 0 ? employeeProps.userType : ceoProps.userType}</div>
    </div>
    <Link href="/">
      <Button fontSize="small" color="primary" id="login">
            Logout
      </Button>
    </Link>
  </div>
  );
};

export default Navbar;
