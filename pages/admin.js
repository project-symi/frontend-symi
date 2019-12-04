/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/Layout';

//components
import EmployeeInput from '../components/adminPage';


export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedUsers: null
    };
  }

  addNewUser = (newUser) => {

  }

  render() {
    return (
      <Layout>
        <h1>Welcome to Symi!</h1>
        <h3>Start using the dashboard from adding employees</h3>
        <EmployeeInput addNewUser={this.addNewEmployee} />
      </Layout>
    );
  }
}

