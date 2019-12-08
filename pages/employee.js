import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feedback from "../components/employeePage/Feedback";
import History from "../components/employeePage/FeedbackHistory";
import Rewards from "../components/employeePage/Rewards";
import Polls from "../components/Polls";
import News from "../components/News";
import Invites from "../components/Invites";
import "../styles/Employee.css";

//dummy data for fuzzy name input
const employees = [
  { name: "Mini Meow", department: "Marketing", employeeID: "1234" },
  { name: "Igor Dawg", department: "HR", employeeID: "4321" },
  { name: "Yukio Lion", department: "Engineering", employeeID: "2345" },
  { name: "Steffie Frog", department: "Operations", employeeID: "6543" }
];

//dummy data of feedbacks
const feedbacks = [
  {
    feeling: "good",
    about: "Employee",
    input: "Igor",
    note: "he's super helpful and a hardworker",
    dateAdded: null,
    points: 10,
    status: "unseen",
    id: "1111"
  },
  {
    feeling: "okay",
    about: "Benefits",
    note: "there's no gym memebership",
    dateAdded: null,
    points: 10,
    status: "unseen",
    id: "2222"
  },
  {
    feeling: "bad",
    about: "Holidays",
    note: "I don't have Hanukkah off...",
    dateAdded: null,
    points: 10,
    status: "seen",
    id: "3333"
  }
];

const rewards = [
  {
    points: 10,
    category: "feedback",
    dateAdded: "01/12/2019",
    correspondentId: "1111"
  },
  {
    points: 5,
    category: "poll",
    dateAdded: "02/12/2019",
    correspondentId: "6"
  },
  {
    points: 10,
    category: "feedback",
    dateAdded: "04/12/2019",
    correspondentId: "2222"
  },
  {
    points: 5,
    category: "poll",
    dateAdded: "05/12/2019",
    correspondentId: "7"
  },
  {
    points: 10,
    category: "feedback",
    dateAdded: "01/12/2019",
    correspondentId: "3333"
  },
  { points: 5, category: "poll", dateAdded: "07/12/2019", correspondentId: "8" }
];

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isDefaultView: true,
      currentlyShown: "",
      fuzzyNames: "",
      feedbacks: null,
      rewards: null
    };
  }

  componentDidMount() {
    //make an API call to get all the feedbacks
    //make another API call to get all points
    this.setState({ feedbacks, rewards });
  }

  //callback for Feedback to submit the feedback
  submitFeedback = feedbackObj => {
    //make an API call to add the feebback to db
    console.log(feedbackObj, " feedback was sent to db");
    //check whether feedback category is employee, if yes make another API call to add points
    if (feedbackObj.category === "Employee") {
      //API call to db points table, add 10 points toemployee (employeeId will the subcategory)
      // /api/points/:employeeId (${feedback.subcategory} (since it's employee id))
      console.log(feedbackObj.subcategory, " received 10 points");
    }
    this.setState({ fuzzyNames: "" });
  };

  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  //callback for Feedback submit to get employee names
  handleFuzzyNameSearch = string => {
    //make an API call to get fuzzy names and assign the return value to fuzzyNames property
    this.setState({ fuzzyNames: employees });
  };

  handleRewardDetails = (id, category) => {
    if (category === "feedback") {
      //make an API call to get feedback details by ID
      const feedbackDetails = feedbacks.find(feedback => feedback.id === id);
      return feedbackDetails.note;
    } else {
      //make an API call to get poll details by ID
      const pollDetails = "this is dummy poll details";
      return pollDetails;
    }
  };

  renderSwitchView = param => {
    switch (param) {
      case "feedback":
        return (
          <Feedback
            handleFuzzyNameSearch={this.handleFuzzyNameSearch}
            submitFeedback={this.submitFeedback}
            fuzzyNames={this.state.fuzzyNames}
          />
        );
      case "feedbackHistory":
        return <History feedbacks={this.state.feedbacks} />;
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
      default:
        null;
    }
  };

  render() {
    return (
      <Layout>
        <Sidebar
          news={true}
          feedback={true}
          feedbackHistory={true}
          polls={true}
          invites={true}
          rewards={true}
          handleComponentView={this.handleComponentView}
        />
        <div id="page">
          {this.state.isDefaultView ? (
            <div>
              <h1>Welcome to Symi!</h1>
              <h3>
                Start using the dashboard from checking what is happening in the
                company
              </h3>
            </div>
          ) : null}
          {this.renderSwitchView(this.state.currentlyShown)}
        </div>
      </Layout>
    );
  }
}
