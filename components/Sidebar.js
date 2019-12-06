import Link from "next/link";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";

/* eslint-disable react/prop-types */
export default class Sidebar extends React.Component {

  handleOnClick = (e) => {
    this.props.handleComponentView(e.target.name);
    console.log(e.target.name);
  }

  render() {
    return (
      <div id="sidebar">
        {/* CEO VIEW */}
        {/* News
        Assignments
        Invites
        Statistics */}


        {/* EMPLOYEE VIEW */}
        {/* Feedback form
        Feedback history
        News
        Notifications
        Polls
        UsageStatistics (number of people using the app) */}

        {/* ADMIN VIEW */}
        {/* Employee Input
        Assignments
        Updates
        Polls */}
        {
          this.props.isAssignmentsShown ? <Assignments />  : null
        }
        {
          this.props.isNewsShown ? <News />  : null
        }
        {
          this.props.isInvitesShown ? <Invites />  : null
        }
        {
          this.props.isDashboardShown ? <Dashboard />  : null
        }
        {
          this.props.isUpdatesShown ? <Updates />  : null
        }
        {
          this.props.isFeedbackHistoryShown ? <FeedbackHistory />  : null
        }
        {
          this.props.isFeedbackShown ? <Feedback />  : null
        }
        {
          this.props.isRewardsShown ? <Rewards />  : null
        }
        {
          this.props.isPollsShown ? <Polls />  : null
        }
        {
          this.props.employeeInput ? <button name='isEmployeeInputShown' onClick={this.handleOnClick}>EmployeeInput</button> : null
        }
        {
          this.props.isUsageStatisticsShown ? <UsageStatistics />  : null
        }

{/* <div id="sidebar">
        {/* CEO VIEW */}
        <Link href="/ceo">
          <div className="sidebar-button">
            <DashboardIcon color="primary" />
            <Typography>Dashboard</Typography>
          </div>
        </Link>

        {/* EMPLOYEE VIEW */}
        <Link href="/employee">
          <div className="sidebar-button">
            <ChatIcon color="primary" /> <Typography>Feedback</Typography>
          </div>
        </Link>
        {/* ADMIN VIEW */}
        <Link href="/admin">
          <div className="sidebar-button">
            <GroupIcon color="primary" /> <Typography>Employees</Typography>
          </div>
        </Link>

        {/* ALL */}
        <Link href="/about">
          <div className="sidebar-button">
            <InfoIcon color="primary" /> <Typography>About</Typography>
          </div>
        </Link>
      </div> */}
      </div>
    );
  }
}
