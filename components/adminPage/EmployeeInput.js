//util functions
import { emailValidation } from '../../utils/utils';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

export default class EmployeeInput extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeId: '',
      email: '',
      department: '',
      name: '',
      dateOfBirth: '',
      type: '',
      isAlertShown: false
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    //callback from parent which executes POST api call to the backend
    // eslint-disable-next-line react/prop-types
    if (!emailValidation(this.state.email)) {
      this.setState({ isAlertShown: true });
      return;
    }
    this.props.addNewEmployee({ employeeId: this.state.employeeId, email: this.state.email, department: this.state.department, name: this.state.name, dateOfBirth: this.state.dateOfBirth, type: this.state.type });
  }

  render() {
    return (
      <div>
        <h1>Add approved employees</h1>
        <h3>Add employee invidually</h3>
        <form>
          <label>Employee ID</label>
          <input id='employeeId' name='employeeId' value={this.state.employeeId} onChange={this.handleInputChange}  />
          <label>Email</label>
          <input id='email' name='email' value={this.state.email} onChange={this.handleInputChange}  />
          <label>Department</label>
          <input id='department' name='department' value={this.state.department} onChange={this.handleInputChange}  />
          <label>Name</label>
          <input id='name' name='name' value={this.state.name} onChange={this.handleInputChange}  />
          <label>Date Of Birth</label>
          <input id='dateOfBirth' name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleInputChange}  />
          <label>Employee Type</label>
          <input id='type' name='type' value={this.state.type} onChange={this.handleInputChange}  />
          <button onClick={this.handleFormSubmit}>ADD USER</button>
        </form>
        <SweetAlert
          show={this.state.isAlertShown}
          title="Email Validation"
          text="Please input a valid email!"
          onConfirm={() => this.setState({ isAlertShown: false })}
        />
        <h3>Bulk Upload</h3>
        <h4>csv file upload</h4>
      </div>
    );
  }
}
