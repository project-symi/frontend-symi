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
      formValidation: { employeeId: { isShown: false, message: '' }, email: { isShown: false, message: '' }, department: { isShown: false, message: '' }, name: { isShown: false, message: '' }, dateOfBirth: { isShown: false, message: '' }, type: { isShown: false, message: '' }, gender: { isShown: false, message: ''}},
      csvData: null
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    //callback from parent which executes POST api call to the backend
    // eslint-disable-next-line react/prop-types
    const validation = formValidation({ employeeId: this.state.employeeId, email: this.state.email, department: this.state.department, name: this.state.name, dateOfBirth: this.state.dateOfBirth, type: this.state.type, gender: this.state.gender });
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
        type: this.state.type,
        gender: this.state.gender
      });
      swal({
        title: 'Employee Registration Confirm',
        text: 'Are you sure you want to add another user?',
        icon: 'warning',
        button: true
      }).then((val) => swal({
        title: 'Done',
        text: 'Employee successfully added!',
        icon: 'success',
        button: true
      })).then((val) => this.setState({ employeeId: '', email: '', department: '', name: '', dateOfBirth: '', type: '', gender: '' })
      );
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
      e.target.value = '';
    } else {
      Papa.parse(e.target.files[0], {
        complete: (results) => {
          console.log(results);
          this.setState({ csvData: results.data });
        }
      });
    }
  }

  handleCsvUpload = () => {
    this.props.addNewEmployee(this.state.csvData);
    //clear input value in any case
    e.target.value = '';
  }

  render() {
    return (
      <div>
        <h1>Add approved employees</h1>
        <h3>Add an employee invidually</h3>
        <form autoComplete='off'>
          <TextField
            // error={this.state.formValidation.employeeId.isShown}
            name="employeeId"
            id="outlined"
            label="Employee ID"
            //helperText={this.state.formValidation.employeeId.message}
            margin="normal"
            variant="outlined"
            value={this.state.employeeId}
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
            name='gender'
            error={this.state.formValidation.gender.isShown}
            id="outlined-select"
            select
            label="Gender"
            value={this.state.gender}
            onChange={this.handleInputChange}
            helperText={this.state.formValidation.gender.message}
            margin="normal"
            variant="outlined"
            SelectProps={{
              native: true
            }}
          >
            <option value=''></option>
            <option value='ceo'>Female</option>
            <option value='employee'>Male</option>
          </TextField>
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
            <option value=''></option>
            <option value='ceo'>CEO</option>
            <option value='employee'>Employee</option>
            <option value='admin'>Admin</option>
          </TextField>
          <Button onClick={this.handleFormSubmit} variant="contained" color="primary">
            Add Employee
          </Button>
        </form>
        <h3>Bulk Upload</h3>
        <h4>Please upload a csv file</h4>
        <input type='file' onChange={this.handleCsvInput}></input>
        <Button onClick={this.handleCsvUpload} variant="contained" color="primary">Submit</Button>
      </div>
    );
  }
}

export default EmployeeInput;
