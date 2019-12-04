/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/Layout';

//components
import UserInput from '../components/adminPage';


export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      addedUsers: null
    };
  }

  render() {
    return (
      <Layout>
        <h1>Welcome to Symi!</h1>
        <h3>Start to </h3>
      </Layout>
    );
  }
}

