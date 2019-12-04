/* eslint-disable react/prop-types */
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: [
        { feeling: null, about: { type: null, input: null }, note: null }
      ]
    };
  }

  render() {
    return (
      <div>
        <h4>DASHBOARD COMPONENT</h4>
        <h5>TOP CATEGORIES</h5>
        <h5>GENERAL SENTIMENT</h5>
        <h5>TOP EMPLOYEES</h5>
      </div>
    );
  }
}
