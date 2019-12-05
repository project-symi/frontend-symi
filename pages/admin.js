/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/Layout';

//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import Sidebar from '../components/Sidebar';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedEmployee: null
    };
  }

  addNewEmployee = addedEmployee => {
    this.setState({ addedEmployee });
  };

  render() {
    return (
      <Layout >
        <Sidebar isEmployeeInputShown={true}   />
        <h1>Welcome to Symi!</h1>
        <h3>Start using the dashboard from adding employees</h3>
        <EmployeeInput addNewEmployee={this.addNewEmployee} />
      </Layout>
    );
  }
}


