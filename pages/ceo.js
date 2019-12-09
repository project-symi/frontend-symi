/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Dashboard from '../components/ceoPage/Dashboard';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';
import '../styles/CEO.css';

//top employees dummy data (for now)
const topEmployees = [
  { name: 'Igor Dawg', points: 500, employeeId: 3 },
  { name: 'Mini Meow', points: 400, employeeId: 1 },
  { name: 'Yukio Lion', points: 100, employeeId: 2 },
  { name: 'Steffie Frog', points: 150, employeeId: 4 },
  { name: 'Potato Fan', points: 300, employeeId: 5 }
];

export default class Ceo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentlyShown: 'dashboard',
      topEmployees: null
    };
  }

  componentDidMount() {
    //make an API call to db to pass top employees data to dashboard
    this.setState({ topEmployees });
  }

  //decide which component to render
  handleComponentView = view => {
    this.setState({ currentlyShown: view });
  };

  handleSendInvitation = (invitationObj) => {
    //make an API call to create an invitation
    console.log(invitationObj, ' invitation was sent');
  }

  renderSwitchView = param => {
    switch (param) {
    case 'news':
      return <News />;
    case 'dashboard':
      return <Dashboard handleSendInvitation={this.handleSendInvitation} topEmployees={this.state.topEmployees} />;
    case 'assignments':
      return <Assignments />;
    case 'polls':
      return <Polls />;
    case 'invites':
      return <Invites />;
    default:
      null;
    }
  };

  render() {
    return (
      <Layout>
        <Sidebar
          news={true}
          assignments={true}
          polls={true}
          dashboard={true}
          invites={true}
          handleComponentView={this.handleComponentView}
        />
        <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
      </Layout>
    );
  }
}
