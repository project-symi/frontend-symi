/* eslint-disable react/prop-types */
import '../../styles/Employee.css';

//components
import { Autocomplete } from '@material-ui/lab';
import {
  Slider,
  Select,
  TextField,
  Button,
  FormControl,
  FormHelperText
} from '@material-ui/core';

//util functions
import { feedbackValidation, debounce } from '../../utils/utils';

//feelings data
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
      feeling: 'good',
      about: '',
      input: '',
      note: '',
      status: 'unseen',
      feedbackValidation: { result: false, errors: {feeling: {isShown: false, message: ''}, note: {isShown: false, message: ''}, about: {isShown: false, message: ''}, input: {isShown: false, message: ''}} }
    };
  }

  update = debounce(() => {
    this.props.handleFuzzyNameSearch(this.state.input);
  }, 1500);

  handleInputChange = (event) => {
    if (this.state.about === 'Employee') {
      this.setState({ [event.target.name]: event.target.value });
      this.update(event);
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // send feedback object
    const validation = feedbackValidation({ feeling: this.state.feeling, about: this.state.about, note: this.state.note, input: this.state.input });
    if (validation.result) {
      this.setState({ feedbackValidation: validation });
    } else {
      const feedback = {
        feeling: this.state.feeling,
        status: this.state.status,
        category: this.state.about,
        note: this.state.note,
        subcategory: this.state.input
      };
      this.props.submitFeedback(feedback);
    }
  };

  handleFeelingInput = (event, value) => {
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

  // searchEmployee = (event, value) => {
  //   console.log(event);

  //   this.setState({
  //     about: {
  //       type: this.state.about.type,
  //       input: value.employeeID
  //     }
  //   });
  // };

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
              onChange={this.handleFeelingInput}
            />
          </div>

          {/* CATEGORY SELECT */}
          <div className="about-line">
            <span className="feedback-text">ABOUT</span>

            <FormControl error={this.state.feedbackValidation.errors.about.isShown} >
              <Select
                name="about"
                native
                onChange={this.handleInputChange}
                style={{ width: 250 }}
              >
                <option value="" />
                <option value="Employee">Employee</option>
                <option value="News">News</option>
                <option value="Work/Life Balance">Work/Life Balance</option>
                <option value="Benefits">Benefits</option>
                <option value="Holidays">Holidays</option>
                <option value="Job Satisfaction">Job Satisfaction</option>
                <option value="Company Policy">Company Policy</option>
                <option value="Other">Other</option>
              </Select>
              {
                this.state.feedbackValidation.errors.about.message ? <FormHelperText id="my-helper-text">{this.state.feedbackValidation.errors.about.message}</FormHelperText> : null
              }

              {this.state.about === 'Employee' && this.props.fuzzyNames === '' || this.state.about === 'News' && this.props.fuzzyNames === '' ? (
                <TextField error={this.state.feedbackValidation.errors.input.isShown}
                  helperText={this.state.feedbackValidation.errors.input.message}
                  id="outlined"
                  margin="normal"
                  name="input"
                  placeholder={this.state.about === 'Employee' ? 'Please specify employee name' : 'Please enter news topic'}
                  onChange={this.handleInputChange}></TextField>
              ) : null}
              { this.props.fuzzyNames.length > 1 ? (
                <Autocomplete
                  options={this.props.fuzzyNames}
                  getOptionLabel={option => {
                    return `${option.name} (${option.department})`;
                  }}
                  style={{ width: 250 }}
                  onChange={this.searchEmployee}
                  renderInput={params => <TextField label="Select Employee" {...params} fullWidth />}
                />
              ) : null }
            </FormControl>
          </div>

          {/* NOTE */}
          <div className="about-line">
            <span className="feedback-text">BECAUSE</span>
            <TextField
              error={this.state.feedbackValidation.errors.note.isShown}
              helperText={this.state.feedbackValidation.errors.note.message}
              id="outlined"
              margin="normal"
              name="note"
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
