/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../styles/About.css';

import steffie from '../assets/headshots/steffie.png';
import igor from '../assets/headshots/igor.png';
import yukio from '../assets/headshots/yukio.png';
import mini from '../assets/headshots/mini.png';

export default class Ceo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Sidebar />
        <div id="page">
          <span className="title">About Symi</span>

          <div id="about">
            This was a group project created as a student at
            <a href="https://codechrysalis.io">Code Chrysalis</a>. SYMI (send
            your message interface) is a way for employees to voice their
            opinion to C-Suite. View this open-source project on Github
            <a href="https://github.com/project-symi">here</a>.
          </div>

          <span className="title">Development Team</span>
          <div id="team">
            <div className="profile">
              <img className="headshot" src={mini}></img>
              <span>Minira Samadova</span>
              <span>Tech Lead/Fullstack</span>
              <span>
                <a href="https://github.com/miniengineer">
                  <GitHubIcon color="primary" fontSize="small" />
                </a>
                <a href="https://www.linkedin.com/in/minira-samadova/">
                  <LinkedInIcon color="primary" fontSize="small" />
                </a>
              </span>
            </div>
            <div className="profile">
              <img className="headshot" src={igor}></img>
              <span>Igor Michailov</span>
              <span>Fullstack</span>
              <span>
                <a href="https://github.com/FuyuByakko">
                  <GitHubIcon color="primary" fontSize="small" />
                </a>
                <a href="https://www.linkedin.com/in/igor-michailov-68929b27/">
                  <LinkedInIcon color="primary" fontSize="small" />
                </a>
              </span>
            </div>
            <div className="profile">
              <img className="headshot" src={steffie}></img>
              <span>Steffie Harner</span>
              <span>Frontend/UX Design</span>
              <span>
                <a href="https://github.com/steffieharner">
                  <GitHubIcon color="primary" fontSize="small" />
                </a>
                <a href="https://www.linkedin.com/in/steffieharner">
                  <LinkedInIcon color="primary" fontSize="small" />
                </a>
                <a href="https://twitter.com/steffieharner">
                  <TwitterIcon color="primary" fontSize="small" />
                </a>
                <a href="https://instagram.com/steffieharner">
                  <InstagramIcon color="primary" fontSize="small" />
                </a>
              </span>
            </div>
            <div className="profile">
              <img className="headshot" src={yukio}></img>
              <span>Yukio Ueda</span>
              <span>Backend</span>
              <span>
                <a href="https://github.com/Yukio0315">
                  <GitHubIcon color="primary" fontSize="small" />
                </a>
                <a href="https://www.linkedin.com/in/yukio-ueda">
                  <LinkedInIcon color="primary" fontSize="small" />
                </a>
                <a href="https://twitter.com/SnowSnowManMan">
                  <TwitterIcon color="primary" fontSize="small" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
