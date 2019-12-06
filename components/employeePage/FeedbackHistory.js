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

        <div className="feedback-history-sub">
          <span>Feedback ▾</span> <span>Date Added ▾</span>
        </div>
        {this.state.feedback.map((item, i) => {
          return (
            <div key={i} className="feedback-history">
              <div className="feedback-string">
                I feel {item.feeling.toUpperCase()} about{' '}
                {item.about.input.toUpperCase()} because{' '}
                {item.note.toUpperCase()}.
              </div>
              <div className="date-added">
                (Added
                {item.dateAdded})
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
