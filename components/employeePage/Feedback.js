/* eslint-disable react/prop-types */
import '../../styles/Employee.css';
import { Slider, Select, MenuItem, TextField, Button } from '@material-ui/core';
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

export default class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      feeling: null,
      about: { type: null, input: null },
      note: null,
      dateAdded: null
    };
  }

  searchEmployee = event => {
    this.setState({
      about: {
        type: this.state.about.type,
        input: event.target.value
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

    // add timestampe
    const newDate = new Date();
    this.setState({ dateAdded: newDate });

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
        <p className="title">Feedback</p>
        <form className="feedback-container">
          <div className="about-line">
            I FEEL
            <Slider
              defaultValue={100}
              aria-labelledby="discrete-slider-restrict"
              step={50}
              marks={feelings}
              onChange={this.getFeeling}
            />
          </div>

          <div>
            <label>ABOUT </label>
            {/* 1st ABOUT SELECTION */}
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value=""
              onChange={this.handleChange}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <select name="About" onChange={this.handleInputChange}>
              <option>--- select ---</option>
              <option value="Employee">Employee</option>
              <option>Work/Life Balance</option>
              <option>Benefits</option>
              <option>Holidays</option>
              <option>Job Satisfaction</option>
              <option>Company Policy</option>
              <option>Other</option>
            </select>
            {/* 2nd ABOUT > EMPLOYEE SEARCH */}
            {this.state.about.type === 'Employee' ? (
              <input type="text" onChange={this.searchEmployee}></input>
            ) : (
              <div></div>
            )}
            {/* 2nd ABOUT > CATEGORY */}
            {this.state.about.type === 'Category' ? (
              <select
                name="Category"
                onChange={this.handleInputChange}
              ></select>
            ) : (
              <div></div>
            )}
            {/* CATEGORY SELECT */}
          </div>

          <div>
            <label>BECAUSE </label>
            <input
              type="text"
              name="note"
              value={this.state.note}
              onChange={this.handleInputChange}
            ></input>
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
