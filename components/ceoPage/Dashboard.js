/* eslint-disable react/prop-types */

//material-ui
import { Button } from '@material-ui/core';

//charts
import SentimentOverall from './Charts/SentimentOverall';
import SentimentbyCategory from './Charts/SentimentbyCategory';
import SentimentbyNews from './Charts/SentimentbyNews';
import SentimentbyDept from './Charts/SentimentbyDept';

//components
import CreateInvite from './CreateInvite';

// material ui
import AccountBoxIcon from '@material-ui/icons/AccountBox';

//images
import Loader from "../../assets/loader_img.gif";
import human from "../../assets/human.png";


// sweet alert
import swal from "@sweetalert/with-react";


//context API
import CeoContext from '../../contextApi/CeoContext';



export default class Dashboard extends React.Component {
  static contextType = CeoContext;

  constructor() {
    super();
    this.state = {
      currentlyShown: "defaultView",
      invitee: null
    };
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  ////////////////////////////// TOP RATED EMPLOYEES
  /////////// EMPLOYEE DETAILS
 showEmployeeDetails = async (employee) => {
   const employeeFeedback = await this.props.topEmployeeFeedbacks.filter((feedback)=>feedback.recipientId === employee.id);

    swal({
      content: (
        <div>
        <div className="employee-popup">
          {employee.gender === "male" ?  <img className="employee-img" width="200px" src={human}></img> : <img className="employee-img" width="200px" src={human}></img> }
         
          <div className="employee-details">
            <div className="employee-name">
              {employee.name}, {employee.gender[0].toUpperCase()}
            </div>
            {employee.department}
          </div>
        </div>
      <div className="employee-feedback">{employeeFeedback.map((feedback, i) => {
            return (<div key={i}>{`"${feedback.note}"`}</div>);
          })}
      </div>
      </div>
        
      ),
      buttons: {
        confirm: {
          text: 'INVITE',
          value: 'invite',
          className: 'swal-button'
        },
        cancel: {
          text: 'CANCEL',
          value: 'cancel',
          className: ''
        }
      }
    }).then(value => {
      if (value === 'invite') {
        this.handleSwitchViewToInvite(employee);
      }
    });
  };

  ////////// INVITATION
  //switch view to Create Invitation and pass the invitee name
  handleSwitchViewToInvite = invitee => {
    this.setState({
      currentlyShown: 'createInvitation',
      invitee
    });
  };

  //in case CEO click cancel invitation button switch to default view
  handleCancelInvitation = () => {
    this.setState({ currentlyShown: 'defaultView' });
  };

  render() {
    return (
      <div>
        {this.state.currentlyShown === 'createInvitation' ? (
          <CreateInvite
            invitee={this.state.invitee}
            handleCancelInvitation={this.handleCancelInvitation}
          />
        ) : (
          <div>
            <p className="title">CEO Dashboard</p>
            <div id="data-container">
              <div>
                <p className="data-title">TOP RATED EMPLOYEES</p>
                <div className="data">
                  {this.context.topEmployees ? (
                    this.context.topEmployees
                      .sort((a, b) => {
                        return b.points - a.points;
                      })
                      .map((employee, i) => {
                        return (
                          <div key={i} className="top">
                            <div className="top-num">{i + 1}</div>
                            <div
                              onClick={() => this.showEmployeeDetails(employee)}
                            >
                              {employee.name}
                            </div>
                            <div>{employee.point} ⭐️</div>
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
                      style={{ height: '100px', width: '100px' }}
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
                    .concat(this.props.topDepartments)
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
