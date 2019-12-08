/* eslint-disable react/prop-types */

const FeedbackHistory = props => {
  return (
    <div>
      <p className="title">Feedback History</p>

      <div className="feedback-history-sub">
        <span>Feedback ▾</span> <span>Date ▾</span> <span>Points ▾</span>
        <span>Status ▾</span>
      </div>
      {props.feedbacks.map((item, i) => {
        return (
          <div key={i} className="feedback-history">
            <span className="feedback-string">
              I feel {item.feeling.toUpperCase()} about{' '}
              {item.input ? item.input.toUpperCase() : item.about.toUpperCase()}{' '}
              because {item.note.toUpperCase()}.
            </span>
            <span>{item.dateAdded}</span>
            <span>{item.points} ⭐️</span>
            <span>{item.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackHistory;
