/* eslint-disable react/prop-types */
export default class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      feeling: null,
      about: null,
      notes: null
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitFeedback(this.state);
  };

  render() {
    return (
      <form>
        <div>
          <label>I FEEL </label>
          <select name="feeling" onChange={this.handleInputChange}>
            <option name="feeling" value="good">
              😊
            </option>
            <option name="feeling" value="okay">
              😐
            </option>
            <option name="feeling" value="bad">
              😞
            </option>
          </select>
        </div>

        <div>
          <label>ABOUT </label>
          <input
            type="text"
            name="about"
            value={this.state.about}
            onChange={this.handleInputChange}
          ></input>
        </div>

        <div>
          <label>BECAUSE </label>
          <input
            type="text"
            name="notes"
            value={this.state.because}
            onChange={this.handleInputChange}
          ></input>
        </div>

        <button type="submit" onClick={this.handleSubmit}>
          SUBMIT
        </button>
      </form>
    );
  }
}

// Feedback.propTypes = {
//   submitFeedback: PropTypes.node.isRequired
// };
