//util functions
import { formValidation } from '../../utils/utils';

//components
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class EmployeeInput extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeId: '',
      email: '',
      department: '',
      name: '',
      dateOfBirth: '',
      type: '',
      isAlertShown: false,
      alertTitle: null,
      alertText: null
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    //callback from parent which executes POST api call to the backend
    // eslint-disable-next-line react/prop-types
    const validation = formValidation({ employeeId: this.state.employeeId, email: this.state.email, department: this.state.department, name: this.state.name, dateOfBirth: this.state.department, type: this.state.type });
    if (!validation.result) {
      this.setState({ alertTitle: 'Form Validation Error', alertText: validation.errorMessages , isAlertShown: true });
      return;
    }
    this.props.addNewEmployee({
      employeeId: this.state.employeeId,
      email: this.state.email,
      department: this.state.department,
      name: this.state.name,
      dateOfBirth: this.state.dateOfBirth,
      type: this.state.type
    });
  };

  render() {
    return (
      <div>
        <h1>Add approved employees</h1>
        <h3>Add employee invidually</h3>
        <form>
          <label>Employee ID</label>
          <input
            id="employeeId"
            name="employeeId"
            value={this.state.employeeId}
            onChange={this.handleInputChange}
          />
          <label>Email</label>
          <input
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label>Department</label>
          <input
            id="department"
            name="department"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
          <label>Name</label>
          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label>Date Of Birth</label>
          <input id='dateOfBirth' name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleInputChange}  />
          <label>Access Type</label>
          <select name='type' onChange={this.handleInputChange}>
            <option value='ceo'>CEO</option>
            <option value='employee'>Employee</option>
            <option value='admin'>Admin</option>
          </select>
          {/* <input id='type' name='type' value={this.state.type} onChange={this.handleInputChange}  /> */}
          <button onClick={this.handleFormSubmit}>ADD USER</button>
        </form>
        <SweetAlert
          show={this.state.isAlertShown}
          title={this.state.alertTitle ? this.state.alertTitle : 'someText'}
          text={'Please enter a valid ' + this.state.alertText}
          onConfirm={() => this.setState({ isAlertShown: false })}
        />

        <h3>Bulk Upload</h3>
        <h4>csv file upload</h4>
      </div>
    );
  }
}

export default EmployeeInput;
