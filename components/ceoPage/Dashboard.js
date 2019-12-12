/* eslint-disable react/prop-types */

//material-ui
import { Button } from "@material-ui/core";

//charts
import SentimentOverall from "./Charts/SentimentOverall";
import SentimentbyCategory from "./Charts/SentimentbyCategory";
import SentimentbyNews from "./Charts/SentimentbyNews";
import SentimentbyDept from "./Charts/SentimentbyDept";

//components
import CreateInvitation from "./CreateInvitation";

//images
import Loader from "../../assets/loader_img.gif";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      topDepartments: [
        { name: "Engineering", points: 5500 },
        { name: "Operations", points: 7000 },
        { name: "Admin", points: 200 },
        { name: "Marketing", points: 2300 },
        { name: "Sales", points: 5000 },
        { name: "QA", points: 5000 },
        { name: "Part-Time", points: 5000 }
      ],
      currentlyShown: "defaultView",
      invitee: null
    };
  }

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/w6wsrc52/";

  //switch view to Create Invitation and pass the invitee name
  handleSwitchViewToInvite = invitee => {
    this.setState({ currentlyShown: "createInvitation", invitee });
  };

  //in case CEO click cancel invitation button switch to default view
  handleCancelInvitation = () => {
    this.setState({ currentlyShown: "defaultView" });
  };
  //callback from CreateInvitation component
  //ask Parent component to make an API call to DB to create an invitation
  handleSendInvitation = invitationObj => {
    this.props.handleSendInvitation(invitationObj);
  };

  render() {
    return (
      <div>
        {this.state.currentlyShown === "createInvitation" ? (
          <CreateInvitation
            invitee={this.state.invitee}
            handleCancelInvitation={this.handleCancelInvitation}
            handleSendInvitation={this.handleSendInvitation}
          />
        ) : (
          <div>
            <p className="title">CEO Dashboard</p>
            <div id="data-container">
              <div>
                <p className="data-title">TOP RATED EMPLOYEES</p>
                <div className="data">
                  {this.props.topEmployees ? (
                    this.props.topEmployees
                      .sort((a, b) => {
                        return b.points - a.points;
                      })
                      .map((employee, i) => {
                        return (
                          <div key={i} className="top">
                            <div className="top-num">{i + 1}</div>
                            <div>{employee.name}</div>
                            <div>{employee.points} ⭐️</div>
                            <div>
                              <Button
                                size="small"
                                color="primary"
                                onClick={() =>
                                  this.handleSwitchViewToInvite(employee)
                                }
                              >
                                invite
                              </Button>
                            </div>
                          </div>
                        );
                      })
                  ) : (
                    <img
                      src={Loader}
                      style={{ height: "100px", width: "100px" }}
                    ></img>
                  )}
                </div>
              </div>
              <div>
                <p className="data-title">OVERALL SENTIMENT</p>
                <SentimentOverall
                  overallSentiment={this.props.overallSentiment}
                  feedbacksByFeelings={this.props.feedbacksByFeelings}
                  handleGetKeywords={this.props.handleGetKeywords}
                />
              </div>
              <div>
                <p className="data-title">TOP RATED TEAMS</p>
                <div className="data">
                  {[]
                    .concat(this.state.topDepartments)
                    .sort((a, b) => {
                      return b.points - a.points;
                    })
                    .map((department, i) => {
                      return (
                        <div key={i} className="top">
                          <div className="top-num">{i + 1}</div>
                          <div>{department.name}</div>
                          <div>{department.points} ⭐️</div>
                          <div>
                            <Button size="small" color="primary">
                              assign
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div id="data-container-big">
              <div>
                <p className="data-title">SENTIMENT BY DEPARTMENT</p>
                <SentimentbyDept />
              </div>
              <div id="data-container-big">
                <div>
                  <p className="data-title">SENTIMENT BY NEWS</p>
                  <SentimentbyNews />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
