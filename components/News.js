/* eslint-disable react/prop-types */
import React from 'react';

import { Button,TextField } from '@material-ui/core';

import AddNews from '../components/adminPage/AddNews';

import { useContext } from 'react';
import CeoContext from '../contextApi/CeoContext';
import EmployeeContext from '../contextApi/EmployeeContext';
import AdminContext from '../contextApi/AdminContext';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import moment from 'moment';

//images
import Loader from '../assets/loader_img.gif';

const News = () => {
  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);
  const adminProps = useContext(AdminContext);

  console.log({adminProps});

  let props;

  if (Object.keys(adminProps).length > 0) {
    props = adminProps;
  } else if (Object.keys(ceoProps).length > 0) {
    props = ceoProps;
  } else {
    props = employeeProps;
  }


  return (
    <div>
      {props.addNews ? (<AddNews addNews={props.addNews}/>) : null }
      <p className="title">News</p>
      {props.news ? ( <div>
        {props.news.sort((a,b) => {a = new Date(a.postedOn); b = new Date(b.postedOn); return a>b ? -1 : a<b ? 1 : 0;}).map((item, i) => {
          return (
            <div key={i} className="news-container">
              <img className="news-img" src={item.photo}></img>
              {props.deleteNews ? ( <div className="delete">
                <DeleteForeverIcon onClick={() => props.confirmDeleteNews(item.newsId)}
                  style={{ color: 'red' }}
                ></DeleteForeverIcon>
              </div> ) : null}
              <div className="news-desc">
                <h2 className="title-item">{item.title.toUpperCase()}</h2>
                <span className="date"> PUBLISHED <DoubleArrowIcon style={{fontSize: '12px'}}/> {moment(item.postedOn).format('MM/DD/YYYY')}</span>
                <h4>{item.description}</h4>
                {props.directNewsFeedback ? (
                  <div className="submit-feedback-button">
                    <Button variant="contained" color="primary" onClick={() => props.directNewsFeedback(item)}>
                      SUBMIT FEEDBACK
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>) : <img src={Loader}></img>}

    </div>
  );
};

export default News;
