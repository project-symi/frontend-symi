/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '@material-ui/core';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import CeoContext from '../contextApi/CeoContext';
import { useContext } from 'react';
import moment from 'moment';


const Invites = () => {
  const ceoProps = useContext(CeoContext);

  return (
    <div>
      {
        ceoProps.invitations ? <div> <p className="title">Invites</p>

          <div className="invites-sub">
            <span>Details ▾</span>
            <span className="status">Status ▾</span>
          </div>
          {ceoProps.invitations.map((item, i) => {
            return (
              <div key={item.invitationId} className="invite">
                <div className="invite-details">
                  {moment(item.invitationDate).format('MM/DD/YYYY')} at {item.invitationTime}
                  <div>{item.invitee}</div>
                </div>
                <div> {item.comments}</div>
                <div className="status">
                  {item.status === 'accepted' ? (
                    <CheckCircleOutlineIcon style={{ color: 'green' }} />
                  ) : (
                    <HelpOutlineIcon style={{ color: 'purple' }} />
                  )}
                  <div>{item.status}</div>
                </div>
              </div>
            );
          })}</div> : null
      }
    </div>
  );
};

export default Invites;
