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
import { useContext } from 'react';

/* eslint-disable react/prop-types */

const Sidebar = (props) => {

  const value = useContext(EmployeeContext);

  const handleOnClick = view => {
    value.handleComponentView(view);
  };

  return (
    <div id="sidebar">
      {props.dashboard ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('dashboard')}
        >
          <DashboardIcon color="primary" />
          <span className="menu-item">Dashboard</span>
        </div>
      ) : null}
      {value.news ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('news')}
        >
          <AnnouncementIcon color="primary" />
          <span className="menu-item">News</span>
        </div>
      ) : null}
      {props.employeeInput ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('employeeInput')}
        >
          <GroupIcon color="primary" />{' '}
          <span className="menu-item">Employees</span>
        </div>
      ) : null}
      {value.feedback ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('feedback')}
        >
          <ChatIcon color="primary" />{' '}
          <span className="menu-item">Feedback</span>
        </div>
      ) : null}
      {props.updates ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('updates')}
        >
          <AnnouncementIcon color="primary" />
          <span className="menu-item">Updates</span>
        </div>
      ) : null}
      {props.assignments ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('assignments')}
        >
          <AssignmentTurnedInIcon color="primary" />
          <span className="menu-item">Assignments</span>
        </div>
      ) : null}
      {value.invites ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('invites')}
        >
          <InsertInvitationIcon color="primary" />
          <span className="menu-item">Invites</span>
        </div>
      ) : null}
      {value.rewards ? (
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
      {props.usageStatistics ? (
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('usageStatistics')}
        >
          <InfoIcon color="primary" />
          <span className="menu-item">UsageStatistics</span>
        </div>
      ) : null}

      <div>
        <div
          className="sidebar-button"
          onClick={() => handleOnClick('about')}
        >
          <HelpOutlineIcon color="primary" />
          <span className="menu-item">About</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
