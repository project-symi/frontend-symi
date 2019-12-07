/* eslint-disable react/prop-types */
import { Button } from "@material-ui/core";

export default class Invites extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: "",
      invites: [
        {
          date: "12/3/2009",
          title: "Lunch at Afuri",
          invitee: "Yukio",
          status: "accepted"
        },
        {
          date: "12/3/2009",
          title: "Walking meeting to Lawson",
          invitee: "Igor",
          status: "pending"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="title">Invites</p>

        <div className="invites-sub">
          <span>Date ▾</span> <span>Title ▾</span> <span>From/To ▾</span>
          <span>Status ▾</span>
        </div>
        {this.state.invites.map((item, i) => {
          return (
            <div key={i} className="invite">
              <div>{item.date}</div>

              <div> {item.title}</div>
              <div>{item.invitee}</div>
              <div> {item.status}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
