import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';

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
      <div id="page">

        <div className="title">About Symi</div>

        <div id="about-us">
          Symi is a gamified platform for promoting positive feedback and company morale. Employees get points for sending anonymous feedback directly to their CEO. CEO&apos;s can have a top-level overview of company sentiment in the form of data visualization personalized to company changes to employees.
        </div>

        <div className="title">Test Symi</div>
        <div id="user-section">
          <div className="profile">

            <h3><PersonIcon color="primary"></PersonIcon> Employee Access</h3> 
            <ul>
              <li>submit anonymous feedback</li>
              <li>view company news</li>
              <li>accept/decline invites</li>
            </ul>

            <table className="about-table">
              <tr className="about-table">
                <th className="about-th">USERNAME</th>
                <td>X009998</td>

              </tr>
              <tr className="about-table">
                <th className="about-th">PASSWORD</th>
                <td>2019-12-05</td>
              </tr>
            </table>

          </div>

          <div className="profile">
  
            <h3><PersonIcon color="primary"></PersonIcon> CEO Access</h3>
            <ul>
              <li>access dashboard</li>
              <li>send invites to employees</li>
              <li>view company news</li>
            </ul>

            <table className="about-table">
              <tr className="about-table">
                <th className="about-th">USERNAME</th>
                <td>A000000</td>

              </tr>
              <tr className="about-table">
                <th className="about-th">PASSWORD</th>
                <td>abc123</td>
              </tr>
            </table>
          </div>

          <div className="profile">
  
            <h3><PersonIcon color="primary"></PersonIcon> Admin Access</h3>
            <ul>
              <li>add approved users individually</li>
              <li>add approved users in bulk by CSV</li>
              <li>add/delete company news</li>
            </ul>

            <span>For admin access, <a href="mailto:steffie.harner@gmail.com">contact us</a>.</span>
          </div>
        </div>


        <span className="title">Development Team</span>
        <div id="team">
          <div className="profile">
            <img className="headshot" src={mini}></img>
            <span>Minira Samadova</span>
            <span>Tech Lead/Fullstack</span>
            <span>
              <a href="https://github.com/miniengineer">
                <GitHubIcon color="primary" />
              </a>
              <a href="https://www.linkedin.com/in/minira-samadova/">
                <LinkedInIcon color="primary" />
              </a>
            </span>
          </div>
          <div className="profile">
            <img className="headshot" src={igor}></img>
            <span>Igor Michailov</span>
            <span>Fullstack</span>
            <span>
              <a href="https://github.com/FuyuByakko">
                <GitHubIcon color="primary" />
              </a>
              <a href="https://www.linkedin.com/in/igor-michailov-68929b27/">
                <LinkedInIcon color="primary" />
              </a>
            </span>
          </div>
          <div className="profile">
            <img className="headshot" src={steffie}></img>
            <span>Steffie Harner</span>
            <span>Frontend/UX Design</span>
            <span>
              <a href="https://github.com/steffieharner">
                <GitHubIcon color="primary" />
              </a>
              <a href="https://www.linkedin.com/in/steffieharner">
                <LinkedInIcon color="primary" />
              </a>
              <a href="https://twitter.com/steffieharner">
                <TwitterIcon color="primary" />
              </a>
              <a href="https://instagram.com/steffieharner">
                <InstagramIcon color="primary" />
              </a>
            </span>
          </div>
          <div className="profile">
            <img className="headshot" src={yukio}></img>
            <span>Yukio Ueda</span>
            <span>Backend</span>
            <span>
              <a href="https://github.com/Yukio0315">
                <GitHubIcon color="primary" />
              </a>
              <a href="https://www.linkedin.com/in/yukio-ueda">
                <LinkedInIcon color="primary" />
              </a>
              <a href="https://twitter.com/SnowSnowManMan">
                <TwitterIcon color="primary" />
              </a>
            </span>
                     
          </div>
        </div>

        <div id="about-us">
         This was a group project created as a student at&nbsp;
          <a href="https://codechrysalis.io">Code Chrysalis</a> in less than 2 weeks. SYMI (send
          your message interface) is a way for employees to voice their opinion
          to C-Suite. View this open-source project on Github&nbsp;<a href="https://github.com/project-symi">here</a>.
        </div>

      </div>
    );
  }
}
