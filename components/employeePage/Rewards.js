/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';

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
    fontFamily: 'Roboto Condensed'
  }
}));

const Rewards = props => {
  const classes = useStyles();

  const handleShowDetails = (id, category) => {
    //user wants to get details about feedback or poll
    //ask employee.js to make an API call and get either feedback or poll data
    console.log(id, category, 'user asked for details of a reward');
    const details = props.handleRewardDetails(id, category);
    console.log(details);
    swal({
      title: category === 'feedback' ? 'Feedback details' : 'Poll details',
      text: details,
      button: true
    });
  };

  return (
    <div>
      <h1 className="title">Rewards</h1>
      {props.rewards.map((reward, i) => {
        return (
          <div key={i} className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2">
                        {reward.dateAdded}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        className={classes.title}
                      >
                        {reward.category === 'feedback'
                          ? 'Praised by an employee'
                          : 'Poll participation'}
                      </Typography>
                      <Button
                        size="small"
                        onClick={() =>
                          handleShowDetails(
                            reward.correspondentId,
                            reward.category
                          )
                        }
                        color="primary"
                        variant="contained"
                        style={{ cursor: 'pointer' }}
                      >
                        Show details
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.points}
                    >
                      {reward.points} ⭐
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Rewards;
