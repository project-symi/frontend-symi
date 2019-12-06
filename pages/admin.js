/* eslint-disable react/no-unescaped-entities */
//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedEmployee: null,
      isEmployeeInputShown: false
    };
  }

  addNewEmployee = addedEmployee => {
    this.setState({ addedEmployee });
  };

  handleComponentView = (view) => {
    this.setState({ [view]: true });
  }

  render() {
    return (
      <Layout >
        <Sidebar employeeInput={true} handleComponentView={this.handleComponentView}  />
        <h1>Welcome to Symi!</h1>
        <h3>Start using the dashboard from adding employees</h3>
        {
          this.state.isEmployeeInputShown ? <EmployeeInput addNewEmployee={this.addNewEmployee} /> : null
        }
      </Layout>
    );
  }
}


