/* eslint-disable react/prop-types */
import React from 'react';

/////////////////MUI
//import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Grid, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

///////////////////Utils & Context API
import CeoContext from '../contextApi/CeoContext';
import EmployeeContext from '../contextApi/EmployeeContext';
import { useContext } from 'react';

// ui
import moment from 'moment';
import Loader from '../assets/loader_img.gif';
import { Button } from '@material-ui/core';

//sweet alert
import swal from 'sweetalert';
import '../assets/sweetalert.min.js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    borderRadius: '20px',
    marginTop: theme.spacing(2),
    fontFamily: 'Roboto Condensed'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16pt',
    color: '#637aca',
    textShadow: '1.5px #3f50b5',
    fontFamily: 'Roboto Condensed'
  }
}));

const Invites = () => {
  const classes = useStyles();
  const ceoProps = useContext(CeoContext);
  const employeeProps = useContext(EmployeeContext);

  let props;
  if (Object.keys(ceoProps).length > 0) {
    props = ceoProps;
    props.getAllInvitations();
  }
  if (Object.keys(employeeProps).length > 0) {
    props = employeeProps;
  }

  const handleInvitation = (invitation) => {
    swal({
      title: 'Answer the Invitation',
      text: 'Please either Accept or Decline',
      content: {
        element: 'input',
        attributes: {
          placeholder: 'Please add a reply',
        }
      },
      icon: 'warning',
      buttons: {
        confirm: {
          text: 'ACCEPT',
          value: true
        },
        cancel: 'DECLINE'
      }
    }).then(value => {
      if (value) {
        swal({
          title: 'Lunch invitation accepted!',
          icon: 'success',
          button: true
        }).then(() => {
          const answer = {
            status: true,
            reply: value
          };
          props.handleInvitation(invitation, answer);
        });
      } else {
        const answer = {
          status: false,
          reply: swal.getState().actions.confirm.value
        };
        props.handleInvitation(invitation, answer);
      }
    });
  };

  return (
    <div>
      <p className="title">Upcoming Invites</p>
      {
        props.invitations ?
          <div>
            <div className={classes.root}>
            </div>
            {props.invitations.map((item) => {
              return (
                <Paper key={item.invitationId} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          {console.log({item})}
                          <span className="date">{moment(item.invitationDate).format('MMMM Do YYYY').toUpperCase()} AT {item.invitationTime.toUpperCase()}</span>

                          <Typography className={classes.title} gutterBottom variant="subtitle1">
                             Meeting with {item.employeeName ? item.employeeName : 'CEO'}
                            {/* {item.status === 'accepted' ? 'Accepted Invitation' : null}
                            {item.status === 'declined' ? 'Declined Invitation' : null}
                            {item.status === 'pending' ? 'Pending Invitation' : null} */}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {item.employeeName ? item.reply : item.comments} 
                          </Typography>
                        </Grid>
                        {
                          item.employeeName ? null : <Grid item>
                            { item.status === 'pending' ?
                              <Button onClick={() => handleInvitation(item)} style={{ cursor: 'pointer' }} color="primary" variant="contained">Accept</Button>
                              : null}
                          </Grid>
                        }
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">{item.status === 'accepted' ? (
                          <CheckCircleOutlineIcon style={{ color: 'green' }} />
                        ) : (
                          <HelpOutlineIcon style={{ color: 'purple' }} />
                        )}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}</div> : 
          <div className="data-big">
            <img src={Loader}></img>
          </div>
      }
    </div>
  );
};

export default Invites;
