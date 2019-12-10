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

// DEV HELP
import Dev from '../components/Dev';

/* eslint-disable react/prop-types */
//TODO change to functional component
export default class Sidebar extends React.Component {
  constructor() {
    super();
  }

  handleOnClick = view => {
    this.props.handleComponentView(view);
  };

  render() {
    return (
      <div id="sidebar">
        {this.props.dashboard ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('dashboard')}
          >
            <DashboardIcon color="primary" />
            <span className="menu-item">Dashboard</span>
          </div>
        ) : null}
        {this.props.news ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('news')}
          >
            <AnnouncementIcon color="primary" />
            <span className="menu-item">News</span>
          </div>
        ) : null}
        {this.props.employeeInput ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('employeeInput')}
          >
            <GroupIcon color="primary" />{' '}
            <span className="menu-item">Employees</span>
          </div>
        ) : null}
        {this.props.feedback ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('feedback')}
          >
            <ChatIcon color="primary" />{' '}
            <span className="menu-item">Feedback</span>
          </div>
        ) : null}
        {this.props.updates ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('updates')}
          >
            <AnnouncementIcon color="primary" />
            <span className="menu-item">Updates</span>
          </div>
        ) : null}
        {this.props.assignments ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('assignments')}
          >
            <AssignmentTurnedInIcon color="primary" />
            <span className="menu-item">Assignments</span>
          </div>
        ) : null}
        {this.props.invites ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('invites')}
          >
            <InsertInvitationIcon color="primary" />
            <span className="menu-item">Invites</span>
          </div>
        ) : null}
        {this.props.rewards ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('rewards')}
          >
            <StarsIcon color="primary" />
            <span className="menu-item">Rewards</span>
          </div>
        ) : null}
        {/* {this.props.polls ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('polls')}
          >
            <PollIcon color="primary" />
            <span className="menu-item">Polls</span>
          </div>
        ) : null} */}
        {this.props.usageStatistics ? (
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('usageStatistics')}
          >
            <InfoIcon color="primary" />
            <span className="menu-item">UsageStatistics</span>
          </div>
        ) : null}

        {/* <Dev></Dev> */}

        <div>
          <div
            className="sidebar-button"
            onClick={() => this.handleOnClick('about')}
          >
            <HelpOutlineIcon color="primary" />
            <span className="menu-item">About</span>
          </div>
        </div>
      </div>
    );
  }
}
