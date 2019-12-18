/* eslint-disable react/prop-types */

import React from 'react';

// MUI components
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';

import logo from '../assets/symi-small.png';

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

  return (
    <div id="navbar">
      {employeeProps.totalPoints ? (
        <div className="points bounce"> {employeeProps.totalPoints + ' ⭐️'} </div>
      ) : null}

      <div id="logo">
        <img width="150px" src={logo} />
      </div>

      <div id="user">
        <Link href="/">
          <PersonIcon color="primary"></PersonIcon>
        </Link>
        {Object.keys(employeeProps).length > 0 ? <div>{employeeProps.userType} <span style={{ cursor: 'pointer' }}>LOGOUT</span></div> : null}
        {Object.keys(ceoProps).length > 0 ? <div>{ceoProps.userType} <span style={{ cursor: 'pointer' }}>LOGOUT</span></div> : null}
        {Object.keys(adminProps).length > 0 ? <div>{adminProps.userType} <span style={{ cursor: 'pointer' }}>LOGOUT</span></div> : null}
      </div>
    </div>
  );
};

export default Navbar;
