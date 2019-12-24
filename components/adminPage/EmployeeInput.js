/* eslint-disable react/prop-types */
import React from 'react';

//utils
import { formValidation, extractCsvData } from '../../utils/utils';
import Papa from 'papaparse';

//components
import { TextField, Button } from '@material-ui/core';

import Loader from '../../assets/loader_img.gif';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';

//context API
import AdminContext from '../../contextApi/AdminContext';

class EmployeeInput extends React.Component {
  static contextType = AdminContext;

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
      formValidation: {
        employeeId: { isShown: false, message: '' },
        email: { isShown: false, message: '' },
        department: { isShown: false, message: '' },
        name: { isShown: false, message: '' },
        dateOfBirth: { isShown: false, message: '' },
        type: { isShown: false, message: '' },
        gender: { isShown: false, message: '' }
      },
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
    const validation = formValidation({
      employeeId: this.state.employeeId,
      email: this.state.email,
      department: this.state.department,
      name: this.state.name,
      dateOfBirth: this.state.dateOfBirth,
      type: this.state.type,
      gender: this.state.gender
    });
    if (validation.result) {
      this.setState({ formValidation: validation.errors });
      return;
    } else {
      swal({
        title: 'Employee Registration Confirm',
        text: 'Are you sure you want to add another user?',
        icon: 'warning',
        buttons: {
          confirm: {
            text: 'CONFIRM',
            value: 'confirm'
          },
          cancel: 'CANCEL'
        }
      })
        .then(value => {
          switch (value) {
          case 'confirm':
            return swal({
              title: 'Done',
              text: 'Employee successfully added!',
              icon: 'success',
              button: true
            }).then(val => {
              this.context.addNewEmployee({
                employeeId: this.state.employeeId,
                name: this.state.name,
                email: this.state.email,
                department: this.state.department,
                dateOfBirth: this.state.dateOfBirth,
                permission: this.state.type,
                gender: this.state.gender
              });
            });
          default:
            break;
          }
        })
        .then(val =>
          this.setState({
            employeeId: '',
            email: '',
            department: '',
            name: '',
            dateOfBirth: '',
            type: '',
            gender: ''
          })
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
        complete: results => {
          const csvData = extractCsvData(results.data);
          this.setState({ csvData });
        }
      });
    }
  };

  handleCsvUpload = (e) => {
    this.context.addNewEmployee(this.state.csvData);
    //clear input value
    e.target.value = '';
  };

  render() {
    return (
      <div>
        <span className="title">Add Approved Users</span>
        <h3>Add invidually</h3>
        <form autoComplete="off" className="employees-container">
          <TextField
            size="small"
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
            size="small"
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
            name="gender"
            error={this.state.formValidation.gender.isShown}
            id="outlined-select"
            select
            label="Gender"
            value={this.state.gender}
            onChange={this.handleInputChange}
            helperText={this.state.formValidation.gender.message}
            margin="normal"
            variant="outlined"
            size="small"
            SelectProps={{
              native: true
            }}
          >
            <option value=""></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </TextField>
          <TextField
            size="small"
            name="dateOfBirth"
            error={this.state.formValidation.dateOfBirth.isShown}
            helperText={this.state.formValidation.dateOfBirth.message}
            label="Date Of Birth"
            onChange={this.handleInputChange}
            id="date"
            type="date"
            value={this.state.dateOfBirth}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            size="small"
            error={this.state.formValidation.email.isShown}
            name="email"
            id="outlined"
            label="Email"
            helperText={this.state.formValidation.email.message}
            variant="outlined"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <TextField
            size="small"
            error={this.state.formValidation.department.isShown}
            name="department"
            id="outlined"
            label="Department"
            helperText={this.state.formValidation.department.message}
            variant="outlined"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
          <TextField
            size="small"
            name="type"
            error={this.state.formValidation.type.isShown}
            id="outlined-select-currency"
            select
            label="Access Type"
            value={this.state.type}
            onChange={this.handleInputChange}
            helperText={this.state.formValidation.type.message}
            variant="outlined"
            SelectProps={{
              native: true
            }}
          >
            <option value=""></option>
            <option value="ceo">CEO</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </TextField>
          <Button
            className="button"
            onClick={this.handleFormSubmit}
            variant="contained"
            color="primary"
            size="small"
          >
            Add
          </Button>
        </form>
        <h3>Bulk Upload</h3>
        <div className="employee-upload-container">
          <input type="file" onChange={this.handleCsvInput}></input>
          <Button
            onClick={this.handleCsvUpload}
            variant="contained"
            color="primary"
          >
            Upload
          </Button>
        </div>

        <p className="title">Approved Users</p>
        <div className="approved-employees">
          {this.context.approvedUsers ? (this.context.approvedUsers.map((employee,i)=>{return (
            <div key={i} className="employee-line"> 
              <div className="top-num">{i+1}</div> 
              <div>{employee.name}</div>
              <div>{employee.employeeId}</div>
              <div>{employee.department}</div>
              <div>{employee.gender}</div>
              <div>{employee.dateOfBirth}</div>
              <div>{employee.email}</div>
            </div>); })) : <img src={Loader}></img>}
        </div>
      </div>
    );
  }
}

export default EmployeeInput;
