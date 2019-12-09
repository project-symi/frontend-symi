/* eslint-disable react/no-unescaped-entities */
//components
import EmployeeInput from "../components/adminPage/EmployeeInput";
import Updates from "../components/adminPage/Updates";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Assignments from "../components/Assignments";
import Polls from "../components/Polls";
import About from "../components/About";
import "../styles/Admin.css";

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedEmployee: null,
      isDefaultView: true,
      currentlyShown: "assignments"
    };
  }

  addNewEmployee = addedEmployee => {
    if (Array.isArray(addedEmployee)) {
      console.log("use endpoint for bulk upload");
    } else {
      console.log("individual employee upload");
      this.setState({ addedEmployee });
    }
  };

  handleComponentView = view => {
    this.setState({ currentlyShown: view, isDefaultView: false });
  };

  renderSwitchView = param => {
    switch (param) {
      case "employeeInput":
        return <EmployeeInput addNewEmployee={this.addNewEmployee} />;
      case "updates":
        return <Updates />;
      case "assignments":
        return <Assignments />;
      case "polls":
        return <Polls />;
      case "about":
        return <About />;
        null;
    }
  };

  render() {
    return (
      <Layout>
        <Sidebar
          employeeInput={true}
          updates={true}
          assignments={true}
          polls={true}
          handleComponentView={this.handleComponentView}
        />
        {this.renderSwitchView(this.state.currentlyShown)}
      </Layout>
    );
  }
}
