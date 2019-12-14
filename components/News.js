import { Button } from '@material-ui/core';

import { useContext } from 'react';
import CeoContext from '../contextApi/CeoContext';
import EmployeeContext from '../contextApi/EmployeeContext';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const News = props => {
  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);

  employeeProps ? props = employeeProps : props = ceoProps;

  return (
    <div>
      <p className="title">News</p>
      <div>
        {props.news.sort((a,b) => {a = new Date(a.postedOn); b = new Date(b.postedOn); return a>b ? -1 : a<b ? 1 : 0;}).map((item, i) => {
          return (
            <div key={i} className="news-container">
              <img className="news-img" src={item.photo}></img>
              {/* <div className="delete">
                  <DeleteForeverIcon
                    style={{ color: "red" }}
                  ></DeleteForeverIcon>
                </div> */}
              <div className="news-desc">
                {item.postedOn.split(' ')[0]}
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                {props.directNewsFeedback ? (
                  <div className="submit-feedback-button">
                    <Button variant="contained" color="primary">
                      SUBMIT FEEDBACK
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
  
export default News;