/* eslint-disable react/prop-types */

import React from 'react';

//MUI icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import StarsIcon from '@material-ui/icons/Stars';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import InfoIcon from '@material-ui/icons/Info';

//context API
import EmployeeContext from '../contextApi/EmployeeContext';
import CeoContext from '../contextApi/CeoContext';
import AdminContext from '../contextApi/AdminContext';
import { useContext } from 'react';

const Sidebar = props => {
  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);
  const adminProps = useContext(AdminContext);

  const handleOnClick = view => {
    //check which component (ceo or employee) renders the sidebar
    //to invoke the right version of handleComponentView
    if (Object.keys(employeeProps).length > 0)
      employeeProps.handleComponentView(view);
    if (Object.keys(ceoProps).length > 0) ceoProps.handleCeoComponentView(view);
    if (Object.keys(adminProps).length > 0) adminProps.handleAdminComponentView(view);
  };

  return (
    <div id="sidebar">
      {ceoProps.dashboard ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('dashboard')}
        >
          <DashboardIcon color="primary" />
          <span className="menu-item">Dashboard</span>
        </div>
      ) : null}
      {employeeProps.feedback ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('feedback')}
        >
          <ChatIcon color="primary" />{' '}
          <span className="menu-item">Feedback</span>
        </div>
      ) : null}
      <div className="sidebar-button" onClick={() => handleOnClick('news')}>
        <AnnouncementIcon color="primary" />
        <span className="menu-item">News</span>
      </div>
      {adminProps.employeeInput ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('employeeInput')}
        >
          <GroupIcon color="primary" />{' '}
          <span className="menu-item">Employees</span>
        </div>
      ) : null}
      {ceoProps.assignments || adminProps.assignments ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('assignments')}
        >
          <AssignmentTurnedInIcon color="primary" />
          <span className="menu-item">Assignments</span>
        </div>
      ) : null}
      {employeeProps.invites || ceoProps.invites ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('invites')}
        >
          <InsertInvitationIcon color="primary" />
          <span className="menu-item">Invites</span>
        </div>
      ) : null}
      {employeeProps.rewards ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('rewards')}
        >
          <StarsIcon color="primary" />
          <span className="menu-item">Rewards</span>
        </div>
      ) : null}
      {/* {props.polls ? (
          <div
            className="sidebar-button"
            onClick={() => handleOnClick('polls')}
          >
            <PollIcon color="primary" />
            <span className="menu-item">Polls</span>
          </div>
        ) : null} */}
      {/* {props.usageStatistics ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('usageStatistics')}
        >
          <InfoIcon color="primary" />
          <span className="menu-item">UsageStatistics</span>
        </div>
      ) : null} */}

      <div>
        <div className="sidebar-button" onClick={() => handleOnClick('about')}>
          <HelpOutlineIcon color="primary" />
          <span className="menu-item">About</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
