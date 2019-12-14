/* eslint-disable react/prop-types */
//utils
import { formValidation } from '../../utils/utils';
import Papa from 'papaparse';

//components
import { TextField, Button } from '@material-ui/core';

//sweet alert
import swal from 'sweetalert';
import '../../assets/sweetalert.min.js';

export default class AddNews extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: '',
      title: '',
      description: '',
      formValidation: {
        photo: { isShown: false, message: '' },
        title: { isShown: false, message: '' },
        description: { isShown: false, message: '' }
      }
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    // // eslint-disable-next-line react/prop-types
    // const validation = formValidation({
    //   photo: this.state.photo,
    //   title: this.state.title,
    //   description: this.state.department
    // });

    // if (validation.result) {
    //   this.setState({ formValidation: validation.errors });
    //   return;
    // } else {

    swal({
      title: 'Ready to publish news?',
      text: 'This will update globally.',
      icon: 'warning',
      buttons: {
        confirm: {
          text: 'CONFIRM',
          value: 'confirm'
        },
        cancel: 'EDIT'
      }
    })
      .then(value => {
        switch (value) {
        case 'confirm':
          return swal({
            title: 'News item published!',
            icon: 'success',
            button: true
          }).then(val => {
            console.log('adding news');
            this.props.addNews({
              title: this.state.title,
              description: this.state.description,
              photo: this.state.photo,
            });
          });
        default:
          break;
        }
      })
      .then(val =>
        this.setState({
          title: '',
          description: '',
          photo: '',
        })
      );
    // }
  };

  render() {
    return (
      <div>
        <p className="title">Publish News</p>
        <form
          autoComplete="off"
          className="add-news-container"
        >
          <TextField size="small" name="title" label="Title" variant="outlined"
            value={this.state.title}
            onChange={this.handleInputChange} />
          <TextField
            size="small"
            name="description"
            label="Description"
            variant="outlined"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <TextField
            size="small"
            name="photo"
            label="Photo URL"
            variant="outlined"
            value={this.state.photo}
            onChange={this.handleInputChange}
          />
          <Button color="primary" variant="contained" className="button" onClick={this.handleFormSubmit}>
        UPLOAD
          </Button>
        </form>
      </div>
    );
  }
}