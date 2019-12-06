/* eslint-disable react/prop-types */
//utils
import { formValidation } from '../../utils/utils';
import Papa from 'papaparse';

//components
import { TextField, Button } from '@material-ui/core';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';


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
      gender: '',
      formValidation: { employeeId: { isShown: false, message: '' }, email: { isShown: false, message: '' }, department: { isShown: false, message: '' }, name: { isShown: false, message: '' }, dateOfBirth: { isShown: false, message: '' }, type: { isShown: false, message: '' }},
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
    if (validation.result) {
      this.setState({ formValidation: validation.errors });
      return;
    } else {
      this.props.addNewEmployee({
        employeeId: this.state.employeeId,
        email: this.state.email,
        department: this.state.department,
        name: this.state.name,
        dateOfBirth: this.state.dateOfBirth,
        type: this.state.type
      });
      this.setState({ employeeId: '', email: '', department: '', name: '', dateOfBirth: '', type: '' });
    }
  };

  handleCsvInput = e => {
    //in case file type is not CSV
    if (e.target.files[0].type !== 'text/csv') {
      swal({
        title: 'Upload Error',
        text: 'Please upload a CSV file',
        icon: 'error',
        button: true
      });
    } else {
      console.log(e.target.files[0]);
      Papa.parse(e.target.files[0], {
        complete: (results) => {
          console.log(results);
          this.props.addNewEmployee(results.data);
        }
      });
    }
    //clear input value in any case
    e.target.value = '';
  }

  render() {
    return (
      <div>
        <h1>Add approved employees</h1>
        <h3>Add employee invidually</h3>
        <form autoComplete='off'>
          <TextField
            error={this.state.formValidation.employeeId.isShown}
            name="employeeId"
            id="outlined"
            label="Employee ID"
            helperText={this.state.formValidation.employeeId.message}
            margin="normal"
            variant="outlined"
            value={this.state.employeeId}
            onChange={this.handleInputChange}
          />
          <TextField
            error={this.state.formValidation.email.isShown}
            name="email"
            id="outlined"
            label="Email"
            helperText={this.state.formValidation.email.message}
            margin="normal"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <TextField
            error={this.state.formValidation.department.isShown}
            name="department"
            id="outlined"
            label="Department"
            helperText={this.state.formValidation.department.message}
            margin="normal"
            variant="outlined"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
          <TextField
            error={this.state.formValidation.name.isShown}
            name="name"
            id="outlined"
            label="Employee Name"
            helperText={this.state.formValidation.name.message}
            margin="normal"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <TextField
            name='dateOfBirth'
            error={this.state.formValidation.dateOfBirth.isShown}
            helperText={this.state.formValidation.dateOfBirth.message}
            label="Date Of Birth"
            onChange={this.handleInputChange}
            id="date"
            type="date"
            value={this.state.dateOfBirth}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name='type'
            error={this.state.formValidation.type.isShown}
            id="outlined-select-currency"
            select
            label="Access Type"
            value={this.state.type}
            onChange={this.handleInputChange}
            helperText={this.state.formValidation.type.message}
            margin="normal"
            variant="outlined"
            SelectProps={{
              native: true
            }}
          >
            <option value='ceo'>CEO</option>
            <option value='employee'>Employee</option>
            <option value='admin'>Admin</option>
          </TextField>
          <Button onClick={this.handleFormSubmit} variant="contained" color="primary">
            Add Employee
          </Button>
          {/* <button onClick={this.handleFormSubmit}>ADD USER</button> */}
        </form>
        <h3>Bulk Upload</h3>
        <h4>Please upload a csv file</h4>
        <input type='file' onChange={this.handleCsvInput}></input>
      </div>
    );
  }
}

export default EmployeeInput;
