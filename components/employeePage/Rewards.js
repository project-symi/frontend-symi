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
              <span className="title">Rewards</span>
              { props.rewards ? (<div> 
                {props.rewards.map((reward, i) => {
                  return (
                    <div key={i} className={classes.root}>
                      <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item s>
                                <Typography
                                  className={classes.date}
                                >
                                  {reward.date.split(' ')[0]}
                                </Typography>

                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  className={classes.title}
                                >
                                  {reward.categoryName}
                                </Typography>
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
                              <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.points}
                              >
                            +{reward.points} ⭐
                              </Typography>
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
