/* eslint-disable react/prop-types */
import logo from '../assets/symi-small.png';

// MUI components
import PersonIcon from '@material-ui/icons/Person';

//contextAPI
import { UserConsumer } from '../contextApi/UserContext';

const Navbar = () => {
  return (
    <UserConsumer>
      {
        props => {
          return (<div id="navbar">
            {props.points ? (
              <div id="points"> {props.points + ' ⭐️'} </div>
            ) : null}
            <div id="logo">
              <img width="150px" src={logo} />
            </div>
            {/* <Button fontSize="small" color="primary" id="login">
            Logout
          </Button> */}
            <div id="user">
              <PersonIcon color="primary"></PersonIcon>
              <div>{props.userType}</div>
            </div>
          </div>);
        }
      }
    </UserConsumer>
  );
};

export default Navbar;
