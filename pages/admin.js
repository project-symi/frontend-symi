/* eslint-disable react/no-unescaped-entities */
//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Updates from '../components/adminPage/Updates';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedEmployee: null,
      isDefaultView: true,
      currentlyShown: ''
    };
  }

  addNewEmployee = addedEmployee => {
    this.setState({ addedEmployee });
  };

  handleComponentView = (view) => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  }

  renderSwitchView = (param) => {
    switch (param) {
    case 'employeeInput':
      return <EmployeeInput addNewEmployee={this.addNewEmployee} />;
    case 'updates':
      return <Updates />;
    default:
      null;
    }
  }

  render() {
    return (
      <Layout >
        <Sidebar employeeInput={true} updates={true} assignments={true} polls={true} handleComponentView={this.handleComponentView} />
        {
          this.state.isDefaultView ? <div><h1>Welcome to Symi!</h1>
            <h3>Start using the dashboard from adding employees</h3></div> : null
        }
        {this.renderSwitchView(this.state.currentlyShown)}
      </Layout>
    );
  }
}


