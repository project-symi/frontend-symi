/* eslint-disable react/prop-types */

//material ui
import { TextField, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';

import Invites from '../Invites';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';

//context API
import CeoContext from '../../contextApi/CeoContext';
import { formatDiagnosticsWithColorAndContext } from 'typescript';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '100px 5fr'
  },
  dataField: {
    marginRight: '10px'
  },
  icon: {
    fontSize: '100px',
    color: '#3f50b5'
  },
  sendButton: {
    backgroundColor: '#3f50b5',
    margin: '10px',
    marginLeft: '0px',
    width: '100px',
    '&:hover': {
      backgroundColor: '#3748b0'
    }
  },
  cancelButton: {
    backgroundColor: '#999999',
    margin: '10px',
    marginLeft: '0px',
    width: '100px'
  }
});

class CreateInvitation extends React.Component {
  static contextType = CeoContext;

  constructor() {
    super();
    this.state = {
      comments: '',
      invitationDate: '',
      invitationTime: '12:00:00',
      commentsError: false,
      invitationDateError: false,
      invitationTimeError: false
    };
  }

  componentDidMount = () => {
    this.getDate();
  };

  getDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    let dateString = `${yyyy}-${mm}-${dd}`;

    console.log(dateString);

    this.setState({ invitationDate: dateString });
  };

  handleInputChange = e => {
    //change state and don't forget to get rid of error message
    if (e.target.name === 'comments')
      return this.setState({ comments: e.target.value, commentsError: false });
    if (e.target.name === 'invitationDate') {
      return this.setState({
        invitationDate: e.target.value,
        invitationDateError: false
      });
    }
    if (e.target.name === 'invitationTime') {
      return this.setState({
        invitationTime: e.target.value,
        invitationDateError: false
      });
    }
  };

  //cancel button clicked, switch view back to the dashboard
  handleCancelInvitation = () => {
    this.props.handleCancelInvitation();
  };

  //send button clicked, generate invitation and pass it to the dashboard
  handleSendInvitation = () => {
    //check whether comments and date was inputted
    if (!this.state.comments) this.setState({ commentsError: true });
    if (!this.state.invitationDate)
      return this.setState({ invitationDateError: true });
    //ask for the confirmation before generating and sending an invitation
    swal({
      title: 'Confirm Invite',
      text:
        'Are you sure you want to send an invite to ' +
        this.props.invitee.Name +
        '?',
      icon: 'warning',
      buttons: {
        confirm: {
          text: 'CONFIRM',
          value: 'confirm'
        },
        cancel: 'CANCEL'
      }
    }).then(value => {
      switch (value) {
      case 'confirm':
        return swal({
          title: 'Invite sent!',
          icon: 'success',
          button: true
        })
          .then(value => {
            console.log('generating an invitation');
            this.context.handleSendInvitation({
              employeeId: this.props.invitee.Id,
              comments: this.state.comments,
              invitationDate: this.state.invitationDate,
              status: 'pending or confirmed or rescheduled',
              reply: 'reply from the employee who was invited',
              seen: 'seen or unseen by the CEO'
            });
          })
          .then(value => this.setState({ comments: '', invitationDate: '' }));
      default:
        break;
      }
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <div>
        <h1 className="title">Send Invite</h1>
        <Paper className={classes.paper}>
          <InsertInvitationIcon className={classes.icon} />
          <div>
            <form noValidate autoComplete="off">
              <div className={classes.fields}>
                <TextField
                  id="standard-read-only-input"
                  label="Invite"
                  defaultValue={this.props.invitee.name}
                  InputProps={{
                    readOnly: true
                  }}
                  className={classes.dataField}
                />
                <TextField
                  id="standard"
                  label="Note"
                  value={this.state.comments}
                  className={classes.dataField}
                  name="comments"
                  onChange={this.handleInputChange}
                  error={this.state.commentsError ? true : false}
                  helperText={
                    this.state.commentsError ? 'This field is required' : null
                  }
                />
                <TextField
                  id="date"
                  type="date"
                  label="Date"
                  className={classes.dataField}
                  value={this.state.invitationDate}
                  name="invitationDate"
                  onChange={this.handleInputChange}
                  error={this.state.invitationDateError ? true : false}
                  helperText={
                    this.state.invitationDateError
                      ? 'Please specify a date.'
                      : null
                  }
                />
                <TextField
                  id="time"
                  type="time"
                  label="Time"
                  className={classes.dataField}
                  value={this.state.invitationTime}
                  name="invitationTime"
                  onChange={this.handleInputChange}
                  error={this.state.invitationTimeError ? true : false}
                  helperText={
                    this.state.invitationTimeError
                      ? 'Please specify a time'
                      : null
                  }
                />
              </div>
            </form>
            <Button
              variant="contained"
              color="secondary"
              className={classes.cancelButton}
              onClick={this.handleCancelInvitation}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.sendButton}
              onClick={this.handleSendInvitation}
            >
              Send
            </Button>
          </div>
        </Paper>
        <Invites></Invites>
      </div>
    );
  }
}

export default withStyles(styles)(CreateInvitation);
