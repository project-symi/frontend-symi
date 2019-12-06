/* eslint-disable react/prop-types */
export default class FeedbackHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: [
        {
          feeling: 'good',
          about: { type: 'Employee', input: 'Igor' },
          note: 'he\'s super helpful and a hardworker',
          dateAdded: null
        },
        {
          feeling: 'okay',
          about: { type: 'Category', input: 'Benefits' },
          note: 'there\'s no gym memebership',
          dateAdded: null
        },
        {
          feeling: 'bad',
          about: { type: 'Category', input: 'Holidays' },
          note: 'I don\'t have Hanukkah off...',
          dateAdded: null
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="title">Feedback History</p>
        {this.state.feedback.map((item, i) => {
          return (
            <div className="feedback-container">
              <div className="feedback-string">
                I feel {this.state.feedback[i].feeling.toUpperCase()} about{' '}
                {this.state.feedback[i].about.input.toUpperCase()} because{' '}
                {this.state.feedback[i].note.toUpperCase()}.
              </div>
              <div className="date-added">
                (Added
                {this.state.feedback[i].dateAdded})
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
