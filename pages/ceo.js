/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Dashboard from '../components/ceoPage/Dashboard';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import News from '../components/News';
import Invites from '../components/Invites';
import About from '../components/About';
import '../styles/CEO.css';

export default class Ceo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentlyShown: 'dashboard'
    };
  }

  handleComponentView = view => {
    this.setState({ currentlyShown: view });
  };

  renderSwitchView = param => {
    switch (param) {
    case 'news':
      return <News />;
    case 'dashboard':
      return <Dashboard />;
    case 'assignments':
      return <Assignments />;
    case 'polls':
      return <Polls />;
    case 'invites':
      return <Invites />;
    case 'about':
      return <About />;
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
