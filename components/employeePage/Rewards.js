/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';

import Loader from '../../assets/loader_img.gif';

import moment from 'moment';

//context API
import { EmployeeConsumer } from '../../contextApi/EmployeeContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    margin: '15px',
    borderRadius: '12px'
  },
  image: {
    width: 128,
    height: 128
  },
  points: {
    fontFamily: 'Roboto Condensed'
  },
  title: {
    color: '#58afc2',
    fontFamily: 'Roboto Condensed',
    margin: '5px'
  },
  date: {
    fontWeight: 'bold',
    fontFamily: 'Roboto Condensed',
    fontSize: '13pt',
    marginLeft: '5px'
  }
}));

const Rewards = () => {
  const classes = useStyles();

  const handleShowDetails = reward => {
    swal({
      title: reward.categoryName,
      text: `"${reward.feedbackNote}"`,
      button: true
    });
  };

  return (
    <EmployeeConsumer>
      {
        props => {
          return (
            <div>
              <span className="title">Points History</span>
              { props.points ? (<div>
                {props.points.sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                }).map((reward, i) => {
                  return (
                    <div key={i} className={classes.root}>
                      <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item s>
                                <h2
                                  className="reward-item"
                                >
                                  {reward.categoryName}
                                </h2>
                                <span className="date">SENT » {moment(reward.date.substr(0, 10)).format('MM/DD/YYYY')} </span>
                                <Button
                                  size="small"
                                  onClick={() => handleShowDetails(reward)}
                                  color="primary"
                                  style={{ cursor: 'pointer' }}
                                >
                              details
                                </Button>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <div className="points">  +{reward.points} ⭐</div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  );
                })}</div>) : <img src={Loader}></img>} 
            </div>
          );
        }
      }
    </EmployeeConsumer>
  );
};

export default Rewards;
