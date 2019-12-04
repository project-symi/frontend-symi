export default class EmployeeInput extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeId: '',
      email: '',
      department: '',
      name: '',
      dateOfBirth: '',
      type: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    //callback from parent which executes POST api call to the backend
    this.props.addNewEmployee({ employeeId: this.state.employeeId, email: this.state.email, department: this.state.department, name: this.state.name, dateOfBirth: this.state.dateOfBirth, type: this.state.type });
  }

  render() {
    return (
      <div>
        <h1>Add approved employees</h1>
        <h3>Add employee invidually</h3>
        <form>
          <label>Employee ID</label>
          <input name='employeeId' value={this.state.employeeId} onChange={this.handleInputChange}  />
          <label>Email</label>
          <input name='email' value={this.state.email} onChange={this.handleInputChange}  />
          <label>Department</label>
          <input name='department' value={this.state.department} onChange={this.handleInputChange}  />
          <label>Name</label>
          <input name='name' value={this.state.name} onChange={this.handleInputChange}  />
          <label>Date Of Birth</label>
          <input name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleInputChange}  />
          <label>Employee Type</label>
          <input name='type' value={this.state.type} onChange={this.handleInputChange}  />
          <button onClick={this.handleFormSubmit}>ADD</button>
        </form>
        <h3>Bulk Upload</h3>
        <h4>csv file upload</h4>
      </div>
    );
  }
}

EmployeeInput.propTypes = {
  addNewEmployee: PropTypes.node.isRequired
};

//need to invoke callback func from the parent component to pass info about added user
