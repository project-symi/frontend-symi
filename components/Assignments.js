/* eslint-disable react/prop-types */
export default class Assignments extends React.Component {
  constructor() {
    super();
    this.state = {
      topEmployees: [],
      feedback: [
        { feeling: null, about: { type: null, input: null }, note: null }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="title">Assignments</p>
      </div>
    );
  }
}
