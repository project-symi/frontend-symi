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
import AdminContext from '../contextApi/AdminContext';
import { useContext } from 'react';

const Navbar = () => {

  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);
  const adminProps = useContext(AdminContext);

  return (<div id="navbar">
    {employeeProps.points ? (
      <div id="points"> {employeeProps.points + ' ⭐️'} </div>
    ) : null}
    <div id="logo">
      <img width="150px" src={logo} />
    </div>
    <div id="user">
      <PersonIcon color="primary"></PersonIcon>
    {Object.keys(employeeProps).length > 0 ? <div>{employeeProps.userType}</div> : null}
    {Object.keys(ceoProps).length > 0 ? <div>{ceoProps.userType}</div> : null}
    {Object.keys(adminProps).length > 0 ? <div>{adminProps.userType}</div> : null}
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
