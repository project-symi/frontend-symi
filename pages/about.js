/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

export default class Ceo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Sidebar />
        <div id="page">
          <h2>ABOUT PAGE</h2>
          <h5>
            SYMI (send your message interface) is a way for employees to voice
            their opinion to C-Suite.
          </h5>
        </div>
      </Layout>
    );
  }
}
