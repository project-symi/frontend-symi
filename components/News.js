import { Button,TextField } from '@material-ui/core';

import { useContext } from 'react';
import CeoContext from '../contextApi/CeoContext';
import EmployeeContext from '../contextApi/EmployeeContext';
import AdminContext from '../contextApi/AdminContext';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const News = props => {
  const employeeProps = useContext(EmployeeContext);
  const ceoProps = useContext(CeoContext);
  const adminProps = useContext(AdminContext);

  console.log({adminProps});

  if (Object.keys(adminProps).length > 0) {
    props = adminProps;
  } else if (Object.keys(ceoProps).length > 0) {
    props = ceoProps;
  } else {
    props = employeeProps;
  }

  return (
    <div>
      {props.uploadNews ? (<div>
        <p className="title">Add News</p>
        <form
          autoComplete="off"
          className="employees-container"
          className="add-news-container"
        >
          <TextField size="small" name="title" label="Title" variant="outlined" />
          <TextField
            size="small"
            name="description"
            label="Description"
            variant="outlined"
          />
          <Button color="primary" variant="contained">
        UPLOAD
          </Button>
        </form>
      </div>) : null }
     
      <p className="title">News</p>
      <div>
        {props.news.sort((a,b) => {a = new Date(a.postedOn); b = new Date(b.postedOn); return a>b ? -1 : a<b ? 1 : 0;}).map((item, i) => {
          return (
            <div key={i} className="news-container">
              <img className="news-img" src={item.photo}></img>
              {props.deleteNews ? ( <div className="delete">
                <DeleteForeverIcon onClick={() => {props.confirmDeleteNews(item.newsId);}}
                  style={{ color: 'red' }}
                ></DeleteForeverIcon>
              </div> ) : null}
              <div className="news-desc">
                {item.postedOn.split(' ')[0]}
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                {props.directNewsFeedback ? (
                  <div className="submit-feedback-button">
                    <Button variant="contained" color="primary" onClick={() => {props.uploadNews(item.newsId);}}>
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