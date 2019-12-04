import Navbar from './Navbar';
import PropTypes from 'prop-types';

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;

Layout.PropTypes = {
  children: PropTypes.node.isRequired
};
