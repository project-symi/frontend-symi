/* eslint-disable react/prop-types */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";

//sweet alert
import swal from "sweetalert";
import "../../assets/sweetalert.min.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
    margin: "15px",
    borderRadius: "12px"
  },
  image: {
    width: 128,
    height: 128
  },
  points: {
    fontFamily: "Roboto Condensed"
  },
  title: {
    color: "#58afc2",
    fontFamily: "Roboto Condensed"
  }
}));

const Rewards = props => {
  const classes = useStyles();

  const handleShowDetails = (id, category) => {
    //user wants to get details about feedback or poll
    //ask employee.js to make an API call and get either feedback or poll data
    const details = props.handleRewardDetails(id, category);

    swal({
      title:
        (function() {
          switch (category) {
            case "positive feedback":
              return "Feedback";
              break;
            case "poll":
              return "Poll";
              break;
            case "submitted feedback":
              return "Feedback";
              break;
            default:
              return null;
          }
        })() + " Details",
      text: details,
      button: true
    });
  };

  return (
    <div>
      <span className="title">Rewards</span>
      {props.rewards.map((reward, i) => {
        return (
          <div key={i} className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      {reward.dateAdded}

                      <Typography
                        gutterBottom
                        variant="h6"
                        className={classes.title}
                      >
                        {(function() {
                          switch (reward.category) {
                            case "positive feedback":
                              return "Praised by a coworker";
                              break;
                            case "poll":
                              return "Poll participation";
                              break;
                            case "submitted feedback":
                              return "Feedback submitted";
                              break;
                            default:
                              return null;
                          }
                        })()}
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
                        style={{ cursor: "pointer" }}
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
                      +{reward.points} ⭐
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
