export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          title: 'Bring Your Pup to Work!',
          description:
            'You can now bring your puppy to work on Wednesdays! That\'s something to celebrate.',
          photo: 'https://media.giphy.com/media/mRB9PmJFOjAw8/giphy.gif'
        },
        {
          title: 'Kentucky Christmas Party!',
          description:
            'Join the Kentucky Christmas party 12/27! We look forward to having you.',
          photo: 'https://media.giphy.com/media/in4t9IzuZKhqg/giphy.gif'
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
                <div className="news-desc">
                  <h3>{item.title}</h3>
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
