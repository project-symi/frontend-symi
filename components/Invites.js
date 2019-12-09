/* eslint-disable react/prop-types */
import { Button } from "@material-ui/core";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default class Invites extends React.Component {
  constructor() {
    super();
    this.state = {
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
          <span>Details ▾</span>
          <span className="status">Status ▾</span>
        </div>
        {this.state.invites.map((item, i) => {
          return (
            <div key={i} className="invite">
              <div className="invite-details">
                {item.date}
                <div>{item.invitee}</div>
              </div>

              <div> {item.title}</div>
              <div className="status">
                {item.status === "accepted" ? (
                  <CheckCircleOutlineIcon style={{ color: "green" }} />
                ) : (
                  <HelpOutlineIcon style={{ color: "purple" }} />
                )}

                <div>{item.status}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
