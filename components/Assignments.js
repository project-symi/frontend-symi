/* eslint-disable react/prop-types */


export default class Assignments extends React.Component {
  constructor() {
    super();
    this.state = {
      assignments: [
        {
          task:
            "It seems like bringing TimTams for the Engineering team really brightened their day. Let's order more!",
          assigned: "Mini",
          status: "complete"
        },
        {
          task:
            "Can you start a discussion to make a bring your dog to work day?",
          assigned: "Steffie",
          status: "incomplete"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="title">Assignments</p>

        <div className="assignments-sub">
          <span>Task ▾</span> <span>Assigned ▾</span> <span>Status ▾</span>
        </div>
        {this.state.assignments.map((item, i) => {
          return (
            <div key={i} className="assignments">
              <div>{item.task}</div>

              <div> {item.assigned}</div>
              <div> {item.status}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
