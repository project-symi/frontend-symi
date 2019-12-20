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
import { useContext } from 'react';
import moment from 'moment';
import Loader from '../assets/loader_img.gif';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    borderRadius: '20px',
    marginTop: theme.spacing(4)
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16pt',
    color: '#637aca',
    textShadow: '1.5px #3f50b5',
  }
}));

const Invites = () => {
  const classes = useStyles();
  const ceoProps = useContext(CeoContext);
  ceoProps.getAllInvitations();

  return (
    <div>
      {
        ceoProps.invitations ?
          <div>
            <p className="title">Invites</p>
            <div className={classes.root}>
            </div>
            {ceoProps.invitations.map((item, i) => {
              return (
                <Paper key={item.invitationId} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography className={classes.title} gutterBottom variant="subtitle1">
                            {item.status === 'accepted' ? 'Accepted Invitation' : 'Pending Invitation'}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Lunch meeting with {item.employeeName} on {moment(item.invitationDate).format('MMMM Do YYYY')} at {item.invitationTime}
                          </Typography>
                        </Grid>
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
            })}</div> : <img src={Loader}></img>
      }
    </div>
  );
};

export default Invites;
