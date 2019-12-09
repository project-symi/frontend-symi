/* eslint-disable react/prop-types */
import { TextField, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: '100%',
    marginTop: '20px',
    borderRadius: '20px'
  },
  textField: {
    margin: '10px'
  },
  dataField: {
    marginTop: '26px'
  },
  sendButton: {
    backgroundColor: '#3f50b5',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#3748b0'
    }
  },
  button: {
    margin: '10px',
  },
  fields: {
    margin: 'auto'
  }
}));


const CreateInvitation = (props) => {
  const classes = useStyles();

  const handleCancelInvitation = () => {
    props.handleCancelInvitation();
  };

  return (
    <div>
      <h1 className='title' >Create Invitation</h1>
      <Paper className={classes.paper}>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField
              id="standard-read-only-input"
              label="Invite"
              defaultValue={'Praise' + props.invitee}
              InputProps={{
                readOnly: true,
              }}
              className={classes.textField}
            />
            <TextField required id="standard-required" label="Comments" className={classes.textField} />
            <TextField
              name="dateOfBirth"
              id="date"
              type="date"
              className={classes.dataField}
            />
          </div>
        </form>
        <Button variant="contained" color="secondary" className={classes.sendButton}>Send</Button>
        <Button variant="contained" color="secondary" onClick={handleCancelInvitation} >Cancel</Button>
      </Paper>
    </div>
  );
};



export default CreateInvitation;
