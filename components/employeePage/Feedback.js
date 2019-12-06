/* eslint-disable react/prop-types */
import '../../styles/Employee.css';
import {
  Slider,
  Select,
  TextField,
  Button,
  FormControl
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const feelings = [
  {
    value: '100',
    label: ' 😊'
  },
  {
    value: 50,
    label: '😐'
  },
  { value: 0, label: '😞' }
];

const employees = [
  { name: 'Mini Meow', department: 'Marketing', employeeID: '1234' },
  { name: 'Igor Dawg', department: 'HR', employeeID: '4321' },
  { name: 'Yukio Lion', department: 'Engineering', employeeID: '2345' },
  { name: 'Steffie Frog', department: 'Operations', employeeID: '6543' }
];

export default class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      feeling: null,
      about: { type: null, input: null },
      note: null
    };
  }

  searchEmployee = (event, value) => {
    console.log(event);

    this.setState({
      about: {
        type: this.state.about.type,
        input: value.employeeID
      }
    });
  };

  handleInputChange = event => {
    console.log('event.target.name = ', event.target.name);
    if (event.target.name === 'About') {
      this.setState({
        about: {
          type: event.target.value,
          input: null
        }
      });
    } else if (
      event.target.name === 'Employee' ||
      event.target.name === 'Category'
    ) {
      this.setState({
        about: {
          type: this.state.about.type,
          input: event.target.value
        }
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    // send feedback object
    this.props.submitFeedback(this.state);
  };

  getFeeling = (event, value) => {
    let feeling = '';
    if (value === 0) {
      feeling = 'meh';
    } else if (value === 50) {
      feeling = 'okay';
    } else if (value === 100) {
      feeling = 'good';
    }
    this.setState({ feeling });
  };

  render() {
    return (
      <div>
        <p className="title">Submit Feedback</p>
        <form className="feedback-container">
          {/* FEELING SLIDER */}
          <div className="about-line">
            <span className="feedback-text">I FEEL</span>

            <Slider
              style={{ width: 250 }}
              defaultValue={100}
              aria-labelledby="discrete-slider-restrict"
              step={50}
              marks={feelings}
              onChange={this.getFeeling}
            />
          </div>

          {/* CATEGORY SELECT */}
          <div className="about-line">
            <span className="feedback-text">ABOUT</span>

            <FormControl>
              <Select
                name="About"
                native
                onChange={this.handleInputChange}
                style={{ width: 250 }}
              >
                <option value="" />
                <option value="Employee">Employee</option>
                <option value="Work/Life Balance">Work/Life Balance</option>
                <option value="Benefits">Benefits</option>
                <option value="Holidays">Holidays</option>
                <option value="Job Satisfaction">Job Satisfaction</option>
                <option value="Company Policy">Company Policy</option>
                <option value="Company Policy">Other</option>
              </Select>

              {/* EMPLOYEE SEARCH */}
              {this.state.about.type === 'Employee' ? (
                <Autocomplete
                  options={employees}
                  getOptionLabel={option => {
                    return `${option.name} (${option.department})`;
                  }}
                  style={{ width: 250 }}
                  onChange={this.searchEmployee}
                  renderInput={params => <TextField {...params} fullWidth />}
                />
              ) : (
                <div></div>
              )}
            </FormControl>
          </div>

          {/* NOTE */}
          <div className="about-line">
            <span className="feedback-text">BECAUSE</span>
            <TextField
              id="outlined"
              margin="normal"
              value={this.state.note}
              onChange={this.handleInputChange}
              style={{ width: 250 }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
