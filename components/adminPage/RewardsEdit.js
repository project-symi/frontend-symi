import React from 'react';

////////MUI
import { TextField, Button } from '@material-ui/core';

//////////CONTEXT API
import AdminContext from '../../contextApi/AdminContext';

class RewardsEdit extends React.Component {
  static contextType = AdminContext;

  constructor() {
    super();
    this.state = {
      testValue: 'hello',
      name: '',
      pointsNecessary: '',
      imgUrl: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const reward = {
      id: 1,
      name: this.state.name,
      points: Number(this.state.pointsNecessary),
      url: this.state.imgUrl
    };
    this.context.editReward(reward);
  }

  render() {
    return (
      <div>
        <span className="title">Edit Reward</span>
        <form autoComplete="off" className="employees-container">
          <TextField
            size="small"
            // error={this.state.formValidation.employeeId.isShown}
            name="name"
            id="outlined"
            label="Reward"
            // helperText={this.state.formValidation.employeeId.message}
            margin="normal"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          <TextField
            size="small"
            // error={this.state.formValidation.employeeId.isShown}
            name="pointsNecessary"
            id="outlined"
            label="Number of Points"
            // helperText={this.state.formValidation.employeeId.message}
            margin="normal"
            variant="outlined"
            value={this.state.pointsNecessary}
            onChange={this.handleInputChange}/>
          <TextField
            size="small"
            // error={this.state.formValidation.employeeId.isShown}
            name="imgUrl"
            id="outlined"
            label="Reward Image URL"
            // helperText={this.state.formValidation.employeeId.message}
            margin="normal"
            variant="outlined"
            value={this.state.imgUrl}
            onChange={this.handleInputChange}/>
            <Button
            className="button"
            onClick={this.handleFormSubmit}
            variant="contained"
            color="primary"
            size="small"
          >
            Edit
          </Button>
        </form>
      </div>
    );
  }
}

export default RewardsEdit;
