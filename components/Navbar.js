/* eslint-disable react/prop-types */
import logo from '../assets/symi-small.png';

// MUI components
import PersonIcon from '@material-ui/icons/Person';

//contextAPI
import { UserConsumer } from '../contextApi/UserContext';

export default class Navbar extends React.Component {
  render() {
    return (
      <UserConsumer>
        {
          props => {
            console.log(props);
          //   return (<div id="navbar">
          //     {this.props.points ? (
          //       <div id="points"> {props.points + ' ⭐️'} </div>
          //     ) : null}
          //     <div id="logo">
          //       <img width="150px" src={logo} />
          //     </div>
          //     {/* <Button fontSize="small" color="primary" id="login">
          //   Logout
          // </Button> */}
          //     <div id="user">
          //       <PersonIcon color="primary"></PersonIcon>
          //       {/* <div>{this.props.userType}</div> */}
          //     </div>
          //   </div>);
          }
        }
      </UserConsumer>
    );
  }
}
