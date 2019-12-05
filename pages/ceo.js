/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Dashboard from '../components/ceoPage/Dashboard';

const Ceo = () => (
  <Layout>
    <Sidebar />
    <div id="page">
      <h2>CEO PAGE</h2>
      <Dashboard />
    </div>
  </Layout>
);

export default Ceo;
