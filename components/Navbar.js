/* eslint-disable react/prop-types */

import React from 'react';

// MUI components
import { Button } from '@material-ui/core';

import logo from '../assets/symi-small.png';

//next.js
import Link from 'next/link';

//context API
import EmployeeContext from '../contextApi/EmployeeContext';
import { useContext } from 'react';

const Navbar = () => {
  const employeeProps = useContext(EmployeeContext);

  return (
    <div id="navbar">
      {employeeProps.totalPoints ? (
        <div className="points bounce"> {employeeProps.totalPoints + ' ⭐️'} </div>
      ) : null}

      <div id="logo">
        <img width="150px" src={logo} />
      </div>

      <div id="logout">
        <Link href="/">
          <Button size="small" variant="contained" color="primary">LOGOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
