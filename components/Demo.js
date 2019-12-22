/* eslint-disable react/prop-types */

import React from 'react';

//MUI icons
import CEO from '../assets/CEO.png';
import Employee from '../assets/Employee.png';

//context API
import EmployeeContext from '../contextApi/EmployeeContext';
import CeoContext from '../contextApi/CeoContext';
import { useContext } from 'react';

const Demo = props => {
  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);

  return (
    <div id="demo">
      {Object.keys(employeeProps).length > 0 ? <div><img width="140px"src={Employee}></img>{employeeProps.userType} </div> : null}
      {Object.keys(ceoProps).length > 0 ? <div><img width="140px" src={CEO}></img>{ceoProps.userType} </div> : null}
    </div>
  );
};

export default Demo;
