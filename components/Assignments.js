/* eslint-disable react/prop-types */
import React from 'react';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default class Assignments extends React.Component {
  constructor() {
    super();
    this.state = {
      assignments: [
        {
          task:
            'It seems like bringing TimTams for the Engineering team really brightened their day. Let\'s order more!',
          assigned: 'Mini',
          status: 'complete'
        },
        {
          task:
            'Can you start a discussion to make a bring your dog to work day?',
          assigned: 'Steffie',
          status: 'incomplete'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <span className="title">Assignments</span>

        <div className="assignments-sub">
          <span>Details ▾</span> <span className="assigned-to">Assigned ▾</span>{' '}
          <span className="status">Status ▾</span>
        </div>
        {this.state.assignments.map((item, i) => {
          return (
            <div key={i} className="assignments">
              <div>{item.task}</div>

              <div> {item.assigned}</div>
              <div className="status">
                {item.status === 'incomplete' ? (
                  <HighlightOffIcon style={{ color: 'red' }} />
                ) : (
                  <CheckCircleOutlineIcon style={{ color: 'green' }} />
                )}
                {item.status}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
