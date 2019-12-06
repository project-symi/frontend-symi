import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';

// DEV HELP
import Dev from '../components/Dev';

/* eslint-disable react/prop-types */
//TODO change to functional component
export default class Sidebar extends React.Component {
  handleOnClick = view => {
    this.props.handleComponentView(view);
  };

  render() {
    return (
      <div id="sidebar">
        {this.props.dashboard ? (
          <div className="sidebar-button">
            <DashboardIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('dashboard')}>
              Dashboard
            </Typography>
          </div>
        ) : null}
        {this.props.news ? (
          <div className="sidebar-button">
            <AnnouncementIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('news')}>
              News
            </Typography>
          </div>
        ) : null}
        {this.props.employeeInput ? (
          <div className="sidebar-button">
            <GroupIcon color="primary" />{' '}
            <Typography onClick={() => this.handleOnClick('employeeInput')}>
              Employees
            </Typography>
          </div>
        ) : null}
        {this.props.feedback ? (
          <div className="sidebar-button">
            <ChatIcon color="primary" />{' '}
            <Typography onClick={() => this.handleOnClick('feedback')}>
              Feedback
            </Typography>
          </div>
        ) : null}
        {this.props.feedbackHistory ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('feedbackHistory')}>
              Feedback History
            </Typography>
          </div>
        ) : null}
        {this.props.updates ? (
          <div className="sidebar-button">
            <AnnouncementIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('updates')}>
              Updates
            </Typography>
          </div>
        ) : null}
        {this.props.assignments ? (
          <div className="sidebar-button">
            <AssignmentTurnedInIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('assignments')}>
              Assignments
            </Typography>
          </div>
        ) : null}
        {this.props.invites ? (
          <div className="sidebar-button">
            <InsertInvitationIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('invites')}>
              Invites
            </Typography>
          </div>
        ) : null}
        {this.props.rewards ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('rewards')}>
              Rewards
            </Typography>
          </div>
        ) : null}
        {this.props.polls ? (
          <div className="sidebar-button">
            <PollIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('polls')}>
              Polls
            </Typography>
          </div>
        ) : null}
        {this.props.usageStatistics ? (
          <div className="sidebar-button">
            <InfoIcon color="primary" />
            <Typography onClick={() => this.handleOnClick('usageStatistics')}>
              UsageStatistics
            </Typography>
          </div>
        ) : null}

        <Dev></Dev>
      </div>
    );
  }
}
