/* eslint-disable react/prop-types */

import PointsKey from './PointsKey';

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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//util functions
import { feedbackValidation, debounce } from '../../utils/utils';
import moment from 'moment';

//images
import Loader from '../../assets/loader_img.gif';

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
      status: false,
      feedbackValidation: {
        result: false,
        errors: {
          note: { isShown: false, message: '' },
          about: { isShown: false, message: '' },
          input: { isShown: false, message: '' }
        }
      },
      isPopupOpen: false
    };
  }

  //make an API call to DB to get employees
  update = debounce(async () => {
    await this.props.handleFuzzyNameSearch(this.state.input);
    this.setState({ isPopupOpen: true });
  }, 1500);

  handleInputChange = event => {
    //for because & about input field
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEmployeeNameInput = event => {
    this.setState({ input: event.target.value });
    this.update();
  };

  handleSubmit = event => {
    event.preventDefault();

    // send feedback object
    const validation = feedbackValidation({
      about: this.state.about,
      note: this.state.note,
      input: this.state.input
    });
    if (validation.result) {
      this.setState({ feedbackValidation: validation });
    } else {
      const feedback = {
        feeling: this.state.feeling,
        status: this.state.status,
        category: this.state.about,
        note: this.state.note,
        recipientId: this.state.about === 'Employee' ? this.state.input : '',
        newsId: this.state.about === 'News' ? this.state.input : 0
      };
      this.props.submitFeedback(feedback);
      this.setState({ about: '', note: '', input: '' });
    }
  };

  handleFeelingInput = (event, value) => {
    let feeling = '';
    if (value === 0) {
      feeling = 'sad';
    } else if (value === 50) {
      feeling = 'meh';
    } else if (value === 100) {
      feeling = 'good';
    }
    this.setState({ feeling });
  };

  searchEmployee = (event, value) => {
    //change input value to the employee id
    //TODO for version 2.0 write logic to add newsId depending on the category
    if (this.state.isPopupOpen) {
      this.setState({ input: value.employeeId, isPopupOpen: false });
    } else {
      console.log('hello', this.state.input);
      //clear the input and re-render employee name input field
      this.setState({ input: '' });
      this.props.deleteFuzzyNames();
    }
  };

  render() {
    return (
      <div>
        <div>
          <div id="feedback-container">
            {/* //////////// SUBMIT FEEDBACK SECTION */}
            <div>
              <p className="title">Submit Feedback</p>
              <form className="feedback-submit">
                {/* FEELING SLIDER */}

                {/* FEELING SLIDER */}
                <div className="about-line">
                  <div className="feedback-text">I FEEL</div>
                  <Slider
                    style={{ width: 220 }}
                    defaultValue={100}
                    aria-labelledby="discrete-slider-restrict"
                    step={50}
                    marks={feelings}
                    onChange={this.handleFeelingInput}
                  />
                </div>

                {/* CATEGORY SELECT */}
                <div className="about-line">
                  <div className="feedback-text">ABOUT</div>

                  <FormControl
                    error={this.state.feedbackValidation.errors.about.isShown}
                  >
                    <Select
                      name="about"
                      native
                      onChange={this.handleInputChange}
                      style={{ width: 220 }}
                      value={this.state.about}
                    >
                      <option value="" />
                      <option value="Employee">Employee</option>
                      <option value="News">News</option>
                      <option value="Work/Life Balance">
                        Work/Life Balance
                      </option>
                      <option value="Benefits">Benefits</option>
                      <option value="Holidays">Holidays</option>
                      <option value="Job Satisfaction">Job Satisfaction</option>
                      <option value="Company Policy">Company Policy</option>
                      <option value="Other">Other</option>
                    </Select>
                    {this.state.feedbackValidation.errors.about.message ? (
                      <FormHelperText id="my-helper-text">
                        {this.state.feedbackValidation.errors.about.message}
                      </FormHelperText>
                    ) : null}

                    {(this.state.about === 'Employee' &&
                      this.props.fuzzyNames === '') ||
                    (this.state.about === 'News' &&
                      this.props.fuzzyNames === '') ? (
                        <TextField
                          error={
                            this.state.feedbackValidation.errors.input.isShown
                          }
                          helperText={
                            this.state.feedbackValidation.errors.input.message
                          }
                          id="outlined"
                          margin="normal"
                          name="input"
                          placeholder={
                            this.state.about === 'Employee'
                              ? 'Please specify employee name'
                              : 'Please enter news topic'
                          }
                          onChange={this.handleEmployeeNameInput}
                        ></TextField>
                      ) : null}
                    {this.props.fuzzyNames ? (
                      <Autocomplete
                        options={this.props.fuzzyNames}
                        getOptionLabel={option => {
                          return `${option.name} (${option.department})`;
                        }}
                        open={this.state.isPopupOpen}
                        style={{ width: 220 }}
                        onChange={this.searchEmployee}
                        renderInput={params => (
                          <TextField
                            label="Select Employee"
                            {...params}
                            fullWidth
                          />
                        )}
                      />
                    ) : null}
                  </FormControl>
                </div>

                {/* NOTE */}
                <div className="about-line">
                  <span className="feedback-text">BECAUSE</span>
                  <TextField
                    error={this.state.feedbackValidation.errors.note.isShown}
                    helperText={
                      this.state.feedbackValidation.errors.note.message
                    }
                    id="outlined"
                    margin="normal"
                    name="note"
                    onChange={this.handleInputChange}
                    value={this.state.note}
                    style={{ width: 220 }}
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

            {/* 
        ///// POINTS KEY */}
            <div>
              <p className="title">Quarterly Reward</p>
              <div className="feedback-submit">
                <PointsKey />
              </div>

              <p className="title">Quarterly Prize</p>
              <div className="feedback-submit">
                {/* <img
                className="prize"
                src="https://media.giphy.com/media/26u49YjOazMMAwTGU/giphy-downsized-large.gif"
              ></img> */}
                <div>⭐500 = $50 Amazon Gift Card</div>
              </div>
            </div>
          </div>
        </div>
        <p className="title">Feedback History</p>

        <div className="feedback-history-sub">
          <span>Details ▾</span>
          <span className="status">Status ▾</span>
        </div>
        {this.props.feedbacks ? (
          this.props.feedbacks.map(item => {
            return (
              <div key={item.id} className="feedback-history">
                <span className="feedback">
                  <span> {moment(item.dateAdded).format('ddd, hA')}</span>I feel{' '}
                  {' ' + item.feeling.toLowerCase() + ' '}
                  about
                  {' ' +
                    (item.category === 'Employee' ? item.name : item.category) +
                    ' '}
                  because {item.note}.
                </span>
                <div className="status">
                  <div>
                    {!item.status ? (
                      <HighlightOffIcon style={{ color: 'red' }} />
                    ) : (
                      <CheckCircleOutlineIcon style={{ color: 'green' }} />
                    )}
                  </div>
                  <div> {item.status ? 'Seen' : 'Unseen'}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="feedback-history">
            <img src={Loader}></img>
          </div>
        )}
      </div>
    );
  }
}
