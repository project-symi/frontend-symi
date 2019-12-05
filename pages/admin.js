/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

//components
import EmployeeInput from '../components/adminPage/EmployeeInput';

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
      <Layout>
        <Sidebar />
        <EmployeeInput addNewEmployee={this.addNewEmployee} />
      </Layout>
    );
  }
}
