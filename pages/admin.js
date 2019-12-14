/* eslint-disable react/no-unescaped-entities */
//components
import EmployeeInput from '../components/adminPage/EmployeeInput';
import Updates from '../components/adminPage/Updates';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';
import Polls from '../components/Polls';
import About from '../components/About';
import '../styles/Admin.css';

//context API
import { AdminProvider } from '../contextApi/AdminContext';

//utils
import axios from 'axios';

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedEmployee: null,
      isDefaultView: true,
      currentlyShown: 'assignments',
      userType: 'Admin',
      token: ''
    };
  }

  ///////////GET TOKEN FROM LOCAL STOREAGE FOR API CALLS///////////
  componentDidMount() {
    const token = localStorage.getItem('token');
    this.setState({ token });
  }

  ////////////API CALL TO ADD EMPLOYEE EITHER INVIDUALLY OR BULK UPLOAD/////////
  addNewEmployee = async addedEmployee => {
    ///////BULK UPLOAD////////
    if (Array.isArray(addedEmployee)) {
      console.log(addedEmployee);
      //await axios.post('https://symi-be.herokuapp.com/auth/users/csv', addedEmployee, { headers: { 'token': this.state.token, 'Content-Type': 'application/json' } }).catch(err => console.log(err));
    } else {
      /////INDIVIDUAL UPLOAD////////
      console.log('individual employee upload');
      this.setState({ addedEmployee });
    }
  };

  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  renderSwitchView = view => {
    switch (view) {
    case 'employeeInput':
      return <EmployeeInput />;
    case 'updates':
      return <Updates />;
    case 'assignments':
      return <Assignments />;
    case 'polls':
      return <Polls />;
    case 'about':
      return <About />;
    }
  };

  render() {
    return (
      <AdminProvider value={{ userType: this.state.userType,
        employeeInput: true,
        updates: true,
        assignments: true,
        polls: true,
        handleAdminComponentView: this.handleComponentView,
        addNewEmployee: this.addNewEmployee }}>
        <div className="layout">
          <Navbar />
          <Sidebar />
          <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
        </div>
      </AdminProvider>
    );
  }
}
