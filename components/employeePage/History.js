/* eslint-disable react/prop-types */
export default class History extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: [
        {
          feeling: 'good',
          about: { type: 'Employee', input: 'Igor' },
          note: 'hes super helpful and a hardworker',
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
        <h4>HISTORY COMPONENT</h4>
        {this.state.feedback.map((item, i) => {
          return (
            <h5>
              I feel {this.state.feedback[i].feeling} about{' '}
              {this.state.feedback[i].about.input} because{' '}
              {this.state.feedback[i].note}. (Added
              {this.state.feedback[i].dateAdded})
            </h5>
          );
        })}
      </div>
    );
  }
}
