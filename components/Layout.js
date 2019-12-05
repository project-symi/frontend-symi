import Navbar from './Navbar';
import PropTypes from 'prop-types';
import '../styles/App.css';

const Layout = props => (
  <div className="layout">
    <Navbar />
    {props.children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
