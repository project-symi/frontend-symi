import { Button } from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          title: "Bring Your Pup to Work!",
          description:
            "You can now bring your puppy to work on Wednesdays! That's something to celebrate.",
          photo: "https://media.giphy.com/media/mRB9PmJFOjAw8/giphy.gif",
          date: "12/10/2019"
        },
        {
          title: "Kentucky Christmas Party!",
          description:
            "Join the Kentucky Christmas party 12/27! We look forward to having you.",
          photo: "https://media.giphy.com/media/in4t9IzuZKhqg/giphy.gif",
          date: "12/15/2019"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="title">News</p>
        <div>
          {this.state.news.map((item, i) => {
            return (
              <div key={i} className="news-container">
                <img className="news-img" src={item.photo}></img>
                {/* <div className="delete">
                  <DeleteForeverIcon
                    style={{ color: "red" }}
                  ></DeleteForeverIcon>
                </div> */}
                <div className="news-desc">
                  {item.date}
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                  {/* <div className="submit-feedback-button">
                    <Button variant="contained" color="primary">
                      SUBMIT FEEDBACK
                    </Button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
