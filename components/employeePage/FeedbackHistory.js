/* eslint-disable react/prop-types */
export default class FeedbackHistory extends React.Component {

  render() {
    return (
      <div>
        <p className="title">Feedback History</p>

        <div className="feedback-history-sub">
          <span>Feedback ▾</span> <span>Date Added ▾</span> <span>Status ▾</span> 
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
              <div className="date-added">
                (Status
                {item.status})
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
