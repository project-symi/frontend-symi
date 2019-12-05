import Link from "next/link";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      accessType: null
    };
  }

  render() {
    return (
      <div id="sidebar">
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
      </div>
    );
  }
}
