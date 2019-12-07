import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const CreateInvitation = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className='title' >Create Invitation</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="standard-search" label="Search field" type="search" />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
      </form>
    </div>
  );
};



export default CreateInvitation;
