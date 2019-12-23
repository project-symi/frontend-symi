import React from 'react';

class RewardsEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      testValue: 'hello'
    };
  }

  render() {
    return (
      <div>
        <span className="title">Edit Reward</span>
        {this.state.testValue}
      </div>
    );
  }
}

export default RewardsEdit;
