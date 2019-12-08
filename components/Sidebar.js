import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

// DEV HELP
import Dev from '../components/Dev';

/* eslint-disable react/prop-types */
//TODO change to functional component
export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 500
    };
  }

  handleOnClick = view => {
    this.props.handleComponentView(view);
  };

  render() {
    return (
      <div id="sidebar">
        <div id="points"> {this.state.points} ⭐️</div>
        {this.props.dashboard ? (
          <div className="sidebar-button">
            <DashboardIcon color="primary" />
            <span onClick={() => this.handleOnClick('dashboard')}>
              Dashboard
            </span>
          </div>
        ) : null}
        {this.props.news ? (
          <div className="sidebar-button">
            <AnnouncementIcon color="primary" />
            <span onClick={() => this.handleOnClick('news')}>News</span>
          </div>
        ) : null}
        {this.props.employeeInput ? (
          <div className="sidebar-button">
            <GroupIcon color="primary" />{' '}
            <span onClick={() => this.handleOnClick('employeeInput')}>
              Employees
            </span>
          </div>
        ) : null}
        {this.props.feedback ? (
          <div className="sidebar-button">
            <ChatIcon color="primary" />{' '}
            <span onClick={() => this.handleOnClick('feedback')}>Feedback</span>
          </div>
        ) : null}
        {this.props.feedbackHistory ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <span onClick={() => this.handleOnClick('feedbackHistory')}>
              Feedback History
            </span>
          </div>
        ) : null}
        {this.props.updates ? (
          <div className="sidebar-button">
            <AnnouncementIcon color="primary" />
            <span onClick={() => this.handleOnClick('updates')}>Updates</span>
          </div>
        ) : null}
        {this.props.assignments ? (
          <div className="sidebar-button">
            <AssignmentTurnedInIcon color="primary" />
            <span onClick={() => this.handleOnClick('assignments')}>
              Assignments
            </span>
          </div>
        ) : null}
        {this.props.invites ? (
          <div className="sidebar-button">
            <InsertInvitationIcon color="primary" />
            <span onClick={() => this.handleOnClick('invites')}>Invites</span>
          </div>
        ) : null}
        {this.props.rewards ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <span onClick={() => this.handleOnClick('rewards')}>Rewards</span>
          </div>
        ) : null}
        {this.props.polls ? (
          <div className="sidebar-button">
            <PollIcon color="primary" />
            <span onClick={() => this.handleOnClick('polls')}>Polls</span>
          </div>
        ) : null}
        {this.props.usageStatistics ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <span onClick={() => this.handleOnClick('usageStatistics')}>
              UsageStatistics
            </span>
          </div>
        ) : null}

        <Dev></Dev>

        <div>
          <div className="sidebar-button">
            <HelpOutlineIcon color="primary" />
            <span onClick={() => this.handleOnClick('about')}>About</span>
          </div>
        </div>
      </div>
    );
  }
}
