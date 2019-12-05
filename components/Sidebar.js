//components
import Assignments from './Assignments';
import News from './News';
import Invites from './Invites';
import Dashboard from './ceoPage/Dashboard';
import EmployeeInput from './adminPage/EmployeeInput';
import Updates from './adminPage/Updates';
import FeedbackHistory from './employeePage/Feedback';
import Feedback from './employeePage/Feedback';
import Rewards from './employeePage/Rewards';
import Polls from './Polls';
import UsageStatistics from './employeePage/UsageStatistics';

/* eslint-disable react/prop-types */
export default class Sidebar extends React.Component {

  render() {
    return (
      <div>
        <h4>SIDEBAR</h4>
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
          this.props.isEmployeeInputShown ? <button>EmployeeInput</button> : null
        }
        {
          this.props.isUsageStatisticsShown ? <UsageStatistics />  : null
        }
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

      </div>
    );
  }
}
