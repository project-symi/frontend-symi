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
    margin: '10px',
    borderRadius: '12px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16pt',
    color: '#637aca',
    textShadow: '1.5px #3f50b5',
    fontFamily: 'Roboto Condensed',
    marginTop: '5px',
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
      title: 'Can you make the meeting?',
      text: 'Please either accept or decline.',
      content: {
        element: 'input',
        attributes: {
          placeholder: 'Send a note back.',
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
      <p className="title">Invites</p>
      {
        props.invitations ?
          <div>
            <div className={classes.root}>
            </div>
            {props.invitations.map((item) => { if (item.status == 'pending') {
              return (
                <Paper key={item.invitationId} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <span className="date">{moment(item.invitationDate).format('MMMM Do YYYY').toUpperCase()} AT {item.invitationTime.toUpperCase()}</span>

                          <Typography className={classes.title} gutterBottom variant="subtitle1">
                             Meeting with {item.employeeName ? item.employeeName : 'CEO'}
                          </Typography>
                          <p>
                            {item.comments}
                          </p>
                        </Grid>
                      </Grid>
                      <Grid item>
                        {
                          item.employeeName ? <p>{item.status === 'accepted' ? (
                            <div className="status">
                              <CheckCircleOutlineIcon style={{ color: 'green' }} />
                              <div>accepted</div>
                            </div>
                          ) : (
                            <div className="status">
                              <HelpOutlineIcon style={{ color: 'purple' }} />
                              <div>pending</div>
                            </div>
                          )}</p> : <p>
                            { item.status === 'pending' ?
                              <Button onClick={() => handleInvitation(item)} style={{ cursor: 'pointer' }} color="primary" variant="contained">Answer</Button>
                              : null}
                          </p>
                        }
                      
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            }
            })}</div> : 
          <div className="data-big">
            <img src={Loader}></img>
          </div>
      }
 
      {
        props.invitations ?
          <div>
            <div className={classes.root}>
            </div>
            {props.invitations.map((item) => { if (item.status == 'accepted') {
              return (
                <Paper key={item.invitationId} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <span className="date">{moment(item.invitationDate).format('MMMM Do YYYY').toUpperCase()} AT {item.invitationTime.toUpperCase()}</span>

                          <Typography className={classes.title} gutterBottom variant="subtitle1">
                             Meeting with {item.employeeName ? item.employeeName : 'CEO'}
                          </Typography>
                          <p>
                            {item.comments} 
                          </p>
                        </Grid>
                      </Grid>
                      <Grid item>
                        {item.status === 'accepted' ? (
                          <div className="status">
                            <CheckCircleOutlineIcon style={{ color: 'green' }} />
                            <div>accepted</div>
                          </div>
                        ) : null }
                      
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            }
            })}</div> : 
          null
      }

    </div>
  );
};

export default Invites;
