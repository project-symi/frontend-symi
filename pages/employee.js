/* eslint-disable react/prop-types */
//components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feedback from "../components/employeePage/Feedback";
import Rewards from "../components/employeePage/Rewards";
import Polls from "../components/Polls";
import News from "../components/News";
import Invites from "../components/Invites";
import About from "../components/About";

//utils
import axios from "axios";

//styles
import "../styles/Employee.css";

//dummy data
import { totalPoints, rewards } from "../assets/dummyData";

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isDefaultView: true,
      currentlyShown: "feedback",
      fuzzyNames: "",
      feedbacks: null,
      rewards: null,
      employeeId: "X009999",
      userType: "Employee",
      totalPoints: null
    };
  }

  componentDidMount() {
    //API call to get all the feedbacks made by this user
    this.handleGetFeedbacks();

    //API call to get total points
    this.handleUpdatePoints();

    //API call to get reward/points history
    this.handleGetRewards();

    console.log(this.props.token);
  }

  ///////////////////////////////// POINTS
  // TOTAL POINTS
  handleUpdatePoints = async () => {
    // const res = await axios.get(
    //   `https://symi-be.herokuapp.com/auth/users/${this.state.employeeId}/total_points`,
    //   {
    //     headers: { token: this.props.token }
    //   }
    // );
    // console.log(res);
    // const totalPoints = res.data
    console.log({ totalPoints });

    this.setState({ totalPoints });
  };

  ///////////////////////////////// REWARDS
  // REWARDS HISTORY
  handleGetRewards = async () => {
    // const res = await axios.get(
    //   `https://symi-be.herokuapp.com/auth/users/${this.state.employeeId}/point`,
    //   {
    //     headers: { token: this.props.token }
    //   }
    // );
    // console.log(res);
    // const rewards = res.data

    console.log({ rewards });

    this.setState({ rewards });
  };

  ///////////////////////////////// FEEDBACK
  // FUZZY SEARCH
  handleFuzzyNameSearch = async string => {
    //make an API call to get fuzzy names and assign the return value to fuzzyNames property
    const response = await axios.get(
      `https://symi-be.herokuapp.com/auth/users?name=${string}`,
      { headers: { token: this.props.token } }
    );
    this.setState({ fuzzyNames: response.data });
  };

  deleteFuzzyNames = () => {
    this.setState({ fuzzyNames: "" });
  };

  // SUBMIT FEEDBACK
  submitFeedback = async feedbackObj => {
    //add current employeeId to the feedback object (for the feedback history)
    feedbackObj.employeeId = this.state.employeeId;

    //make an API call to add the feedback to the db
    await axios.post(
      "https://symi-be.herokuapp.com/auth/feedbacks",
      feedbackObj,
      { headers: { token: this.props.token } }
    );

    //check whether feedback category is employee, if yes make another API call to add points
    if (feedbackObj.category === "Employee") {
      //API call to db points table, add 10 points toemployee (employeeId will the subcategory)
      // /api/points/:employeeId (${feedback.subcategory} (since it's employee id))
      console.log(feedbackObj.subcategory, " received 10 points");
    }
    let addedFeedback = [...this.state.feedbacks];
    addedFeedback.unshift(feedbackObj);
    this.setState({ feedbacks: addedFeedback });
    this.deleteFuzzyNames();

    // update points after submitting feedback
    this.handleUpdatePoints();
  };

  // FEEDBACK HISTORY
  handleGetFeedbacks = async () => {
    const response = await axios.get(
      `https://symi-be.herokuapp.com/auth/feedbacks/${this.state.employeeId}`,
      { headers: { token: this.props.token } }
    );

    const feedbacks = response.data.sort((a, b) => {
      a = new Date(a.dateAdded);
      b = new Date(b.dateAdded);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    this.setState({ feedbacks });
  };

  ///////////////////////////////// VIEW
  handleComponentView = view => {
    this.setState({
      currentlyShown: view,
      isDefaultView: false
    });
  };

  ///////////////////////////////// SIDEBAR
  renderSwitchView = param => {
    switch (param) {
      case "feedback":
        return (
          <Feedback
            feedbacks={this.state.feedbacks}
            handleFuzzyNameSearch={this.handleFuzzyNameSearch}
            submitFeedback={this.submitFeedback}
            fuzzyNames={this.state.fuzzyNames}
            deleteFuzzyNames={this.deleteFuzzyNames}
          />
        );
      case "news":
        return <News />;
      case "polls":
        return <Polls />;
      case "rewards":
        return (
          <Rewards
            rewards={this.state.rewards}
            handleRewardDetails={this.handleRewardDetails}
          />
        );
      case "invites":
        return <Invites />;
      case "about":
        return <About />;
      default:
        null;
    }
  };

  render() {
    return (
      <div className="layout">
        <Navbar
          points={this.state.totalPoints}
          userType={this.state.userType}
        />
        <Sidebar
          news={true}
          feedback={true}
          polls={true}
          invites={true}
          rewards={true}
          handleComponentView={this.handleComponentView}
        />
        <div id="page">{this.renderSwitchView(this.state.currentlyShown)}</div>
      </div>
    );
  }
}
